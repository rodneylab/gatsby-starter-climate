describe('/twin-lens-reflex-camera/ accessibility checks', () => {
  it('passes accessibility checks', () => {
    cy.visit('/twin-lens-reflex-camera/');
    cy.injectAxe();
    cy.log('Page header is rendered');
    cy.findAllByRole('heading', { name: /Twin Lens Reflex Camera/i }).should('be.visible');
    cy.checkAccessibility();
  });
});
