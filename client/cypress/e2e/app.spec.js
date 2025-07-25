describe('MERN App E2E', () => {
  it('loads the homepage', () => {
    cy.visit('http://localhost:3000');
    cy.contains('My MERN Testing App');
  });

  it('button is clickable', () => {
    cy.visit('http://localhost:3000');
    cy.contains('Click me').click();
  });
});
