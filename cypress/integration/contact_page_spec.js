describe('/contact/ accessibility checks', () => {
  it('passes accessibility checks', () => {
    cy.visit('/contact/');
    cy.injectAxe();
    cy.log('Page header is rendered');
    cy.findByRole('heading', { name: /Contact me/i }).should('be.visible');
    cy.checkAccessibility();
  });
});
