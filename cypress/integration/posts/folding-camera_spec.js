describe('/folding-camera/ accessibility checks', () => {
  it('passes accessibility checks', () => {
    cy.visit('/folding-camera/');
    cy.injectAxe();
    cy.log('Page header is rendered');
    cy.findAllByRole('heading', { name: /Folding Camera/i }).should('be.visible');
    cy.checkAccessibility();
  });
});