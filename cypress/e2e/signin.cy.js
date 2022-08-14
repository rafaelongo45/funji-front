/// <reference types="cypress" />

describe("Signin tests suite", () => {
  const url = "http://localhost:3000/signin"
  beforeEach(() => {
    cy.deleteDatabase();
  })
  it("Should redirect to signup page", () => {
    cy.visit(url);
    cy.get(".signup-redirect-button").click()
    cy.url().should('equal', "http://localhost:3000/signup")
  })

  it("Should login to an account successfully", () => {
    const data = {
      "email": "funji23@gmail.com",
      "password": "senha123",
    };
    cy.createUser();

    cy.visit(url);
    cy.get(".username-input").type(data.email);
    cy.get(".password-input").type(data.password);
    cy.intercept("POST", "http://localhost:5000/signin").as("signin");
    cy.get(".submit-signin").click()
    cy.wait("@signin");
    cy.url().should('equal', "http://localhost:3000/")
  })
})