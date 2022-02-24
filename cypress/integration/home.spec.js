/// <reference types="Cypress" />
/* eslint-disable quotes */
/* eslint-disable no-undef */

describe('my first test', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('successfuly renders the page header', () => {
    cy.contains('Courses');
    cy.contains('U DANCE');
    cy.contains('Dance is the hidden language of the soul');
  });

  it('renders the courses', () => {
    cy.get(`[data-cy='courses']`).should('have.length', 7);
  });

  it('allows  users  to search for rhythm', () => {
    cy.get(`[data-cy='dropdown']`).click();
    cy.get(`[data-cy='rhythm']`).should('have.length', 2);
  });

  it('successfuly renders the footer', () => {
    cy.get(`[data-cy='footer']`).contains('Copyright © 2022 U Dance');
    cy.contains('About');
    cy.contains('Services');
    cy.contains('Why us');
    cy.contains('Contact');
  });
});
