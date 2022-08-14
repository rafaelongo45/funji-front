/// <reference types="cypress" />

describe("Profile page tests suite", () => {
  const url = "http://localhost:3000/profile"
  beforeEach(() => {
    cy.deleteDatabase();
  })
  it("Should redirect to signup page", () => {
    cy.login();
    cy.visit(url);
    cy.get(".review-button").click();
    cy.get(".kun-button").click();
    cy.url().should('equal', "http://localhost:3000/signup")
  })
})