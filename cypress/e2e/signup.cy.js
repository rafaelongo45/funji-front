/// <reference types="cypress" />

describe("Signup tests suite", () => {
  const url = "http://localhost:3000/signup"
  beforeEach(() => {
    cy.deleteDatabase();
  })
  it("Should redirect to signin page", () => {
    cy.visit(url);
    cy.get(".signin-redirect-button").click()
    cy.url().should('equal', "http://localhost:3000/signin")
  })
  it("Should create an account successfully", () => {
    const data = {
      "username": "funji23",
      "email": "funji23@gmail.com",
      "password": "senha123",
      "profileImage": "https://infoenem.com.br/wp-content/uploads/2017/10/fungos.jpeg"
    };

    cy.visit(url);
    cy.get(".img-input").type(data.profileImage);
    cy.get(".username-input").type(data.username);
    cy.get(".email-input").type(data.email);
    cy.get(".password-input").type(data.password);
    cy.get(".confirmPassword-input").type(data.password);
    cy.intercept("POST", "http://localhost:5000/signup").as("signup");
    cy.get(".submit-signup").click();
    cy.wait("@signup");
    cy.url().should("equal", "http://localhost:3000/signin")
  })
})