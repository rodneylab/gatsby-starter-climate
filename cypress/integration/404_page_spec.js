describe('/404/ accessibility checks', () => {
  it('passes accessibility checks', () => {
    cy.visit('/404/');
    cy.injectAxe();
    cy.log('Page header is rendered');
    cy.findByRole('heading', { name: /Page not found!/i }).should('be.visible');
    cy.checkAccessibility();
  });
});