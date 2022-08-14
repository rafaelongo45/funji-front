/// <reference types="cypress" />

describe('all kanjis page suite', () => {
  const url = "http://localhost:3000/"
  
  it('should render all kanjis on the page', () => {
    cy.visit(url);
    cy.get(".kanji").should('exist')
  });

  it('should redirect to kanji page', () => {
    cy.visit(url);
    cy.get(".kanji").first().click()
    cy.url().should("equal", "http://localhost:3000/kanji");
  })
})