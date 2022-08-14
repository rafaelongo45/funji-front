/// <reference types="cypress" />

describe("Kanji page tests suite", () => {
  beforeEach(() => {
    cy.deleteDatabase();
  })
  const base_url = "http://localhost:3000/"
  it("Should redirect to home page", () => {
    cy.intercept("GET", "http://localhost:5000/kanjis/all").as("allKanjis");
    cy.visit(base_url);
    cy.wait("@allKanjis");
    cy.get(".kanji").first().click();
    cy.get(".back-button").click();
    cy.url().should("equal", base_url);
  });
})