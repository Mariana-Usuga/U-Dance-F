/* eslint-disable no-undef */
describe('my first test', () => {
  it('actually works', () => {
    cy.visit('http://localhost:3000/');
    cy.contains('ARE YOU?');
    cy.contains('STUDENT');
    cy.contains('DIRECTOR');
  });
});
