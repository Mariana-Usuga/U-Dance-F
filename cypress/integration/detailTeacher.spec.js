/// <reference types="Cypress" />
/* eslint-disable quotes */
/* eslint-disable no-undef */
describe('Detail teacher', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('renders the detail course', () => {
    cy.get(`[data-cy='Aprender Salsa']`).click();
    cy.contains('TOMAR CURSO');
  });

  it.only('make a payment', () => {
    cy.get(`[data-cy='Aprender Salsa']`).click();
    cy.contains('TOMAR CURSO');
    cy.get(`[data-cy='take-a-course']`).click();
    cy.get(`[data-cy='card-number']`).type('4575623182290326');
    cy.get('select#expiration-date-month').select('02');
    cy.get('select#expiration-date-year').select('2023');
    cy.get(`[data-cy='cvc']`).type('123');
    cy.get(`[data-cy='btn-send-payment-form']`).click();
    cy.get(`[data-cy='btn-modal-ok']`).click();
  });
});
