// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

function printAccessibilityViolations(violations) {
  cy.task(
    'table',
    violations.map(({
      id, impact, description, nodes,
    }) => ({
      impact,
      description: `${description} (${id})`,
      nodes: nodes.length,
    })),
  );
}

const sizes = ['iphone-6', 'ipad-2', 'macbook-11'];

Cypress.Commands.add(
  'checkAccessibility',
  {
    prevSubject: 'optional',
  },
  (subject, { skipFailures = false } = {}) => {
    sizes.forEach((element) => {
      cy.viewport(element);
      cy.checkA11y(subject, null, printAccessibilityViolations, skipFailures);
    });
  },
);
