/// <reference types="Cypress" />
/* eslint-disable quotes */
/* eslint-disable no-undef */
describe('Detail teacher', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('successfuly renders the page header', () => {
    cy.contains('Courses');
    cy.contains('U DANCE');
    cy.contains('Dance is the hidden language of the soul');
  });

  // it('renders the courses', () => {
  //   cy.get(`[data-cy='courses']`).should('have.length', 8);
  // });

  // it('renders the courses by rhythm', () => {
  //   cy.get(`[data-cy='dropdown']`).click('have.length', 7);
  // });

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

  it('renders the detail course', () => {
    cy.get(`[data-cy='Aprender Salsa']`).click();
    cy.contains('TOMAR CURSO');
  });

  it('make a payment', () => {
    cy.get(`[data-cy='Aprender Salsa']`).click();
    cy.contains('TOMAR CURSO');
    cy.get(`[data-cy='take-a-course']`).click();
    cy.get(`[data-cy='card-number']`).type('4575623182290326');
    cy.get('select#expiration-date-month').select('02');
    cy.get('select#expiration-date-year').select('2023');
    cy.get(`[data-cy='cvc']`).type('123');
    cy.get(`[data-cy='btn-send-payment-form']`).click();
    // cy.get(`[data-cy='btn-modal-ok']`).click();
  });
});
