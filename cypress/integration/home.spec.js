/// <reference types="Cypress" />
/* eslint-disable no-undef */

describe('my first test', () => {
  it('actually works', () => {
    cy.visit('/');
    cy.contains('ARE YOU?');
    cy.contains('STUDENT');
    cy.contains('DIRECTOR');
  });

  it('onClik', () => {
    cy.get('student').click();
  });
});
