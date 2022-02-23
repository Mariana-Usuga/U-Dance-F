/// <reference types="Cypress" />
/* eslint-disable quotes */
/* eslint-disable no-undef */

describe('my first test', () => {
  // beforeEach(() => {
  //   cy.visit('/');
  // });
  it('actually works', () => {
    cy.visit('/');
    cy.contains('ARE YOU?');
    cy.contains('STUDENT');
    cy.contains('DIRECTOR');
  });

  it('onClik', () => {
    cy.visit('/');
    cy.get(`[data-cy='student']`).click();
  });
});
