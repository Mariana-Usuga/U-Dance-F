/// <reference types="Cypress" />
/* eslint-disable quotes */
/* eslint-disable no-undef */

describe('profile director', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('renders choose role', () => {
    cy.contains('ARE YOU?');
    cy.contains('STUDENT');
    cy.contains('DIRECTOR');
  });

  it('renders the director profile', () => {
    cy.get(`[data-cy='director']`).click();
    cy.get(`[data-cy='profile']`).should('contain', 'Profile');
    cy.get(`[data-cy='link-courses-list']`).should('contain', 'Courses');
    cy.get(`[data-cy='name-label']`).should('contain', 'Name');
    cy.get(`[data-cy='lastname-label']`).should('contain', 'Lastname');
    cy.get(`[data-cy='email-label']`).should('contain', 'Email');
  });

  it.only('change director data', () => {
    cy.get(`[data-cy='director']`).click();
    cy.get(`[data-cy='profile-picture']`).attachFile('../../src/components/imgae.png');
    cy.get(`[data-cy='name']`).type('Mariana');
    cy.get(`[data-cy='lastname']`).type('Usuga');
    cy.get(`[data-cy='btn-save-changes']`).click();
    cy.get(`[data-cy='btn-modal-ok']`).click();
  });

  it('check director courses', () => {
    cy.get(`[data-cy='director']`).click();
    cy.get(`[data-cy='link-courses-list']`).click();
    cy.get(`[data-cy='link-create-course']`).should('contain', 'Create a course');
  });

  it('create a course', () => {
    cy.get(`[data-cy='director']`).click();
    cy.get(`[data-cy='link-courses-list']`).click();
    cy.get(`[data-cy='link-create-course']`).click();
    cy.get(`[data-cy='input-course-title']`).type('Porro night by Majao y Nueva Guardia');
    cy.get(`[data-cy='input-course-teacher']`).type('Mariana Usuga Montoya');
    cy.get(`[data-cy='input-course-price']`).type('20.000');
    cy.get(`[data-cy='input-course-rhythm']`).type('porro');
    cy.get(`[data-cy='input-course-place']`).type('Cr 69 # 43-55');
    cy.get(`[data-cy='input-course-description']`).type('Por que mas porro siempre es necesario, nos vemos cada martes para bailar en la mejor pista');
    cy.get(`[data-cy='input-upload-course-image']`).attachFile('../../src/components/imgae.png');
    cy.get(`[data-cy='btn-create-course']`).click();
    cy.get(`[data-cy='btn-modal-ok']`).click();
    cy.get(`[data-cy='link-courses-list']`).click();
  });

  it('delete a course', () => {
    cy.get(`[data-cy='director']`).click();
    cy.get(`[data-cy='link-courses-list']`).click();
    cy.get(`[data-cy='btn-delete-course-6218f012c0a39fb8dae4e6a5']`).click();
    cy.get(`[data-cy='link-logout']`).click();
  });
});
