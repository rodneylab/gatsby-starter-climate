#!/usr/bin/env node

// adapted from source: https://raw.githubusercontent.com/browniebroke/browniebroke.com/f27c05c84b0f4f2785aca0f2b8ef73efddb39a14/csp-util.js

const fs = require('fs');
const path = require('path');
const { DomHandler } = require('domhandler');
const { Parser } = require('htmlparser2');
const replaceInFile = require('replace-in-file');
const sha256 = require('crypto-js/sha256');
const Base64 = require('crypto-js/enc-base64');

const PUBLIC_FOLDER = path.join(__dirname, 'public');
// const OUTPUT_FILE = path.join(PUBLIC_FOLDER, '_headers');
const OUTPUT_FILE = path.join(PUBLIC_FOLDER, '_headers.json');

const removeCspMeta = (inputFile) => {
  const fileContents = fs.readFileSync(inputFile, { encoding: 'utf-8' });
  const regex = /<meta http-equiv="Content-Security-Policy"[^>]+(\/)?>/gi;
  const newFileContents = fileContents.replace(regex, '');
  fs.writeFileSync(inputFile, newFileContents, { encoding: 'utf-8' });
};

// targetFolderToTokenMapping.forEach((TOKEN_TO_REPLACE, INPUT_FILE) => {
const INPUT_PATH = path.join(PUBLIC_FOLDER, './index.html');
let styleHashArray = [];
let styleSrcAttrHashArray = [];

function getCspContentFrom(inputFile) {
  // eslint-disable-next-line no-console
  console.log(`Getting the CSP content from ${inputFile}`);
  try {
    const fileContents = fs.readFileSync(inputFile, { encoding: 'utf-8' });

    let found = false;
    let retVal = '';
    const parser = new Parser(
      {
        onopentag: (name, attributes) => {
          if (name === 'meta') {
            if (
              attributes['http-equiv']
              && attributes['http-equiv'] === 'Content-Security-Policy'
            ) {
              found = true;
              retVal = attributes.content;
            }
          }
        },
      },
      { decodeEntities: true },
    );

    parser.write(fileContents);

    const findBodyStyle = (nodeArray) => {
      nodeArray.forEach((element) => {
        if (
          element.name === 'span'
          && element.attribs.class
          && element.attribs.class === 'gatsby-resp-image-background-image'
          && element.attribs.style
        ) {
          const hash = sha256(element.attribs.style);
          styleSrcAttrHashArray.push(`'sha256-${hash.toString(Base64)}'`);
        }
        if (element.children) {
          if (element.attribs.style) {
            const hash = sha256(element.attribs.style);
            styleSrcAttrHashArray.push(`'sha256-${hash.toString(Base64)}'`);
          }
          findBodyStyle(element.children);
        }
      });
    };

    const handler = new DomHandler((error, dom) => {
      if (error) {
        // eslint-disable-next-line no-console
        console.error(error.message);
      } else {
        const headTagArray = dom[1].children[0].children;
        // head style tags have type and name set to style
        const headStyleTags = headTagArray.filter(
          (element) => element.type === 'style' && element.attribs['data-href'],
        );
        const bodyTagArray = dom[1].children[1].children;
        findBodyStyle(bodyTagArray);
        headStyleTags.forEach((value) => {
          const hash = sha256(value.children[0].data);
          styleHashArray.push(`'sha256-${hash.toString(Base64)}'`);
        });
      }
    });
    const domParser = new Parser(handler);
    domParser.write(fileContents);
    domParser.end();

    if (found === false) {
      throw new Error('Could not find the CSP');
    }

    return retVal;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(
      'Could not retrieve the CSP content. Did you build first? Is the gatsby-config.js still correct?',
    );
    throw err;
  }
}

function updateNetlifyHeaderFile(cspText, outputFile) {
  // make sure styleHashArray does not contain duplicates
  styleSrcAttrHashArray = [...new Set(styleSrcAttrHashArray)];

  // merge style-src-attr with style-src for Firefox compatibility
  styleHashArray = [...new Set([...styleHashArray, ...styleSrcAttrHashArray])];

  let modifiedCspText = cspText;

  // include style-src-attr for Firefox compatibility
  const startIndex = modifiedCspText.indexOf('style-src', 0);
  const endIndex = modifiedCspText.indexOf(';', startIndex);

  // check each hash was not aded by csp plugin before adding it
  const uniqueStyleHashArray = [];
  const metaCspText = modifiedCspText.substring(startIndex, endIndex);
  styleHashArray.forEach((element) => {
    if (!metaCspText.includes(element)) {
      uniqueStyleHashArray.push(element);
    }
  });
  modifiedCspText = `${modifiedCspText.substring(0, endIndex)} ${uniqueStyleHashArray.join(
    ' ',
  )}${modifiedCspText.substring(endIndex)}`;

  const replacementOptions = {
    files: outputFile,
    from: new RegExp('__REPLACE_ME__', 'g'),
    to: modifiedCspText,
  };

  try {
    const changes = replaceInFile.sync(replacementOptions);
    if (changes && changes.length && changes.length > 0) {
      // eslint-disable-next-line no-console
      console.log("Modified Netlify's headers file successfully");
    } else {
      throw new Error(`Failed to find the expected token to replace: ${TOKEN_TO_REPLACE}`);
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Failed to modify Netlify's header file");
    throw error;
  }
}

const cspContent = getCspContentFrom(INPUT_PATH);
updateNetlifyHeaderFile(cspContent, OUTPUT_FILE);
removeCspMeta(INPUT_PATH);

const findAndRemoveCspMeta = (startPath, filter = /\.html$/) => {
  if (!fs.existsSync(startPath)) {
    // eslint-disable-next-line no-console
    console.log('Unable to find directory ', startPath);
    return;
  }
  const files = fs.readdirSync(startPath);
  files.forEach((item) => {
    const filename = path.join(startPath, item);
    const stat = fs.lstatSync(filename);
    if (stat.isDirectory()) {
      findAndRemoveCspMeta(filename, filter);
    } else if (filter.test(filename)) {
      removeCspMeta(filename);
    }
  });
};

// eslint-disable-next-line no-console
console.log('Removing CSP meta tags from public html files');
findAndRemoveCspMeta(PUBLIC_FOLDER);
