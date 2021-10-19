// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { googleSearchElements } from "../support/webElementsRepo/google.search";


Cypress.Commands.add('googleSearch', (searchText, expectedUrl) => {
    cy.visit('https://www.google.com');
    //Click Accept button if exist

    cy.get('body').then( ($body) => {
      if ($body.find('.J2ipb').length > 0) {
        if ($body.find(googleSearchElements.btnAccept).length > 0) {
          cy.get(googleSearchElements.btnAccept).click();
        }
      }
    })
    //Type the text to search
    cy.get(googleSearchElements.inputSearchField).first().type(searchText).type('{enter}');
    //cy.get('input[name="btnK"]').first()
    //Check search results and verify that the expected result is visible
    cy.get(googleSearchElements.headerFirstResultTitle).first().should('be.visible');
    cy.get(googleSearchElements.divFirstResult).first().should('have.text', expectedUrl);
    return cy.get(googleSearchElements.divFirstResult).first();
  })
  