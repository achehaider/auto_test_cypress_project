/// <reference types="cypress" />

import { hibooHomeElements } from "../../support/webElementsRepo/hiboo.home";

const testData = require("../../fixtures/dataset.json");

describe('Goto Hiboo homepage from google search', () => {
  it('Google Search',() => {
      cy.googleSearch('hiboo.io', testData.urlHibouHomePage).click()
      cy.wait(1000)
  });
  
  it('Verify Hiboo Home page',() => {
    //cy.url().should('eq', testData.urlHibouHomePage+'/')

    //Verify the Hiboo logo
    cy.get(hibooHomeElements.imgLogoHiboo).should('be.visible')

    //Verify Navbar elements
    cy.get(hibooHomeElements.menuSolutions).should('be.visible')
    cy.get(hibooHomeElements.btnLogin).should('be.visible')
    cy.get(hibooHomeElements.btnLang).should('be.visible')
    cy.get(hibooHomeElements.btnGetYourAccess).should('be.visible')

    //Verify home page sections
    cy.get(hibooHomeElements.classBillboardSection).should('be.visible')
    cy.get(hibooHomeElements.classSolutionsSection).should('be.visible')
    cy.get(hibooHomeElements.classUsecasesSection).should('be.visible')
    cy.get(hibooHomeElements.classTestimonialsSection).should('be.visible')
    cy.get(hibooHomeElements.classPartnersSection).should('be.visible')
    cy.get(hibooHomeElements.classFaqSection).should('be.visible')
    cy.get(hibooHomeElements.classFooterSection).should('be.visible')
});

});