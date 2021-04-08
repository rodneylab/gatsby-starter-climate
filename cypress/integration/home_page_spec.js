describe('/ accessibility checks', () => {
  it('passes accessibility checks', () => {
    cy.visit('/');
    cy.injectAxe();
    cy.log('Page header is rendered');
    cy.findByRole('heading', { name: /Climate — Gatsby 3 MDX Blog Starter/i }).should('be.visible');
    cy.checkAccessibility();
  });
});