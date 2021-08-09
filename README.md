<img src="./images/rodneylab-github-gatsby-starter-climate.png" alt="Rodney Lab gatsby-functions-fauna Github banner">

<p align="center">
  <a aria-label="Open Rodney Lab site" href="https://rodneylab.com" rel="nofollow noopener noreferrer">
    <img alt="Rodney Lab logo" src="https://rodneylab.com/assets/icon.png" width="60" />
  </a>
</p>

[![Netlify Status](https://api.netlify.com/api/v1/badges/da1e88fb-4fbc-48a4-b8fa-7ca55800ab81/deploy-status)](https://app.netlify.com/sites/affectionate-keller-1a8489/deploys)

<h1 align="center">
  Gatsby 3 Starter Climate
</h1>

[![Open in Visual Studio Code](https://open.vscode.dev/badges/open-in-vscode.svg)](https://open.vscode.dev/rodneylab/gatsby-starter-climate)

Boilerplate code for a <a aria-label="Vist the Gatsby website" href="https://www.gatsbyjs.org" rel="nofollow">Gatsby 3</a> blog using <a aria-label="Vist the Gatsby website" href="https://www.netlify.com/" rel="nofollow">Netlify</a> for hosting. Based on principles of:

- Accessibility
- Security
- Speed

Features:

- Optimised for Gatsby 3 - using File Route API, new Gatsby 3 Image Plugin
- 100% score of Lighthouse accessibility
- No accessibility warning on axe check
- High lighthouse speed scores
- A or higher security rating for headers from securityheaders.com
- Correct use of semantic HTML (only one `<h1>` per page, sections and posts use `<section>` and `<article>` correctly etc.).

## 🚀 Quick start

1.  **Create a Gatsby 3 site.**

    Use the Gatsby 3 CLI to create a new site, specifying the hello-world starter.

    ```shell
    # create a new Gatsby 3 MDX blog site using gatsby-starter-climate
    gatsby new my-mdx-blog-starter https://github.com/rodneylab/gatsby-starter-climate
    ```

1.  **Start developing.**

    Navigate into your new site’s directory, copy the example environment variables (and customise them to suit your needs) and start it up.

    ```shell
    cd my-mdx-blog-starter/
    cp .env.EXAMPLE .env.development
    cp .env.EXAMPLE .env.production
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby 3 tutorial](https://www.gatsbyjs.com/tutorial/part-five/#introducing-graphiql)._

    Open the `my-mdx-blog-starter` directory in your code editor of choice and edit `src/pages/index.jsx`. Save your changes and the browser will update in real time!

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby 3 project.

    .
    ├── cypress
    ├── node_modules
    ├── src
    ├── .env.EXAMPLE
    ├── .eslintrc.js
    ├── .gitignore
    ├── .prettierrc
    ├── commitlint.config.js
    ├── csp-util
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── netlify.toml
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/cypress`**: This directory contains Cypress axe accessibility end-to-end tests. You can expand the tests to suit your needs.

2.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

3.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

4.  **`.env.EXAMPLE`**: This file contains example environment variables. Make two copies to this same root folder: `.env.development` and `.env.production` and add your personal environment variables. These two files will be excluded from git commits by default.

5.  **`.eslintrc.js`**: This file tells ESLint which linting rules to apply. Set to use Airbnb rules by default. Adjust to suit your taste. As well as code style rules, it applies a11y recommended accessibility checks.

6.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

7.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

8.  **`.stylelintrc.json`**: This is a configuration file for [StyleLint](https://stylelint.io/). Stylelint is a tool to help keep the formatting of your code consistent. It can be used in teams to enforce a consistent coding style.

9.  **`commitlint.config.js`**: Configuration for commitlint which is used to enforce conventional git commits. This works in tandem with husky configuration in the `package.json` file.

10. **`csp-util`**: This is a script for placing CSP hashes in Netlify headers, improving site security when running on Netlify.

11. **`gatsby-browser.js`**: This file is where Gatsby 3 expects to find any usage of the [Gatsby 3 browser APIs](https://www.gatsbyjs.com/docs/browser-apis/) (if any). These allow customisation/extension of default Gatsby settings affecting the browser.

12. **`gatsby-config.js`**: This is the main configuration file for a Gatsby 3 site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby 3 plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.com/docs/gatsby-config/) for more detail). To improve security, fairly strict security header parameters are set. **You will almost certainly need to tweak these for your own use case**. For help use the following resources:

    - <a aria-label="See security heading ratings and tips" href="https://securityheaders.com/" target="_blank" rel="nofollow noopener noreferrer">securityheaders.com</a>
    - <a aria-label="See security heading tips" href="https://csper.io/"  target="_blank" rel="nofollow noopener noreferrer">csper.io</a>
    - <a aria-label="Open the Google C S P evaluator tool" href="https://csp-evaluator.withgoogle.com/" target="_blank" rel="nofollow noopener noreferrer">csp-evaluator.withgoogle.com</a>

13. **`gatsby-node.js`**: This file is where Gatsby 3 expects to find any usage of the [Gatsby&nbsp;3 Node APIs](https://www.gatsbyjs.com/docs/node-apis/) (if any). These allow customisation/extension of default Gatsby 3 settings affecting pieces of the site build process.

14. **`gatsby-ssr.js`**: This file is where Gatsby 3 expects to find any usage of the [Gatsby&nbsp;3 server-side rendering APIs](https://www.gatsbyjs.com/docs/ssr-apis/) (if any). These allow customisation of default Gatsby 3 settings affecting server-side rendering.

15. **`LICENSE`**: This Gatsby 3 starter is licensed under the BSD-3-Clause license.

16. **`netlify.toml`** This file contains configuration for Netlify builds. It includes an instruction to use the Netlify `netlify-plugin-gatsby-cache` plugin which helps improve build speed on Netlify. It also includes the custom build command, defined in `package.json`, which generates Netlify headers with CSP hashes.

17. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

18. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

19. **`README.md`**: A text file containing useful reference information about your project.

## 🎓 Learning Gatsby 3

Looking for more guidance? Full documentation for Gatsby 3 lives [on the website](https://www.gatsbyjs.com/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby 3](https://www.gatsbyjs.com/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.com/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## 💫 Deploy

[Build, Deploy, and Host On Netlify](https://www.netlify.com/)

Netlify offers an easy to configure environment and a generous free tier. With baked-in CDN and automated TLS certificates it is a great choice for getting your Gatsby 3 MDX blog up and running at warp speed.

Run the custom build script to ensure CSP hashes are generated and added to Netlify headers:

```bash
npm run build
```

[Netlify](https://netlify.com) CMS can run in any frontend web environment, but the quickest way to try it out is by running it on a pre-configured starter site with Netlify. Use the button below to build and deploy your own copy of the repository:

<a arai-label="Deploy climate on Netlify" href="https://app.netlify.com/start/deploy?repository=https://github.com/rodneylab/gatsby-starter-climate" target="_blank" rel="nofollow noopener noreferrer"><img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify"></a>

After clicking that button, you’ll authenticate with GitHub and choose a repository name. Netlify will then automatically create a repository in your GitHub account with a copy of the files from the template. Next, it will build and deploy the new site on Netlify, bringing you to the site dashboard when the build is complete. Next, you’ll need to set up Netlify’s Identity service to authorise users to log in to the CMS.
