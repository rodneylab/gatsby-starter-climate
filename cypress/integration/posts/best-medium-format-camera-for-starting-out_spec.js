describe('/best-medium-format-camera-for-starting-out/ accessibility checks', () => {
  it('passes accessibility checks', () => {
    cy.visit('/best-medium-format-camera-for-starting-out/');
    cy.injectAxe();
    cy.log('Page header is rendered');
    cy.findAllByRole('heading', { name: /Best Medium Format Camera for Starting out/i }).should('be.visible');
    cy.checkAccessibility();
  });
});