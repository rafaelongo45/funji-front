/// <reference types="cypress" />

describe("header suite", () => {
  const url = "http://localhost:3000/"
  beforeEach(() => {
    cy.deleteDatabase();
    window.localStorage.clear();
  })
  it('should redirect to signin', () => {
    cy.visit(url);
    cy.get(".user-profile").click();
    cy.get(".signin-button").click();
    cy.url().should("equal", "http://localhost:3000/signin");
  });

  it('should redirect to kanjis from joyo grade page', () => {
    cy.visit(url + 'help');
    cy.get(".sidebar-icon").click();
    cy.get(".grades-section").click();
    cy.get(".grade-title").first().click();
    cy.url().should("equal", "http://localhost:3000/");
  });

  it('should redirect to all kanjis page', () => {
    cy.visit(url + 'help');
    cy.get(".sidebar-icon").click();
    cy.get(".all-kanjis-button").click();
    cy.url().should("equal", "http://localhost:3000/");
  });
  
  it('should redirect to help page', () => {
    cy.visit(url);
    cy.get(".sidebar-icon").click();
    cy.get(".help-button").click();
    cy.url().should("equal", "http://localhost:3000/help");
  });

  it('should redirect to a created user page', () => {
    cy.createUser().then(() => {
      cy.get("@userData").then((data) => {
        const username = data.username
        cy.visit(url);
        cy.get(".sidebar-icon").click();
        cy.get(".input-find-user").type('funji');
        cy.get(".user-box").click();
        cy.url().should("equal", `http://localhost:3000/profile`)
      })
    });
  });

  it('should redirect to the user page', () => {
    cy.login()
    cy.visit(url);
    cy.get(".user-profile").click();
    cy.get(".user-profile-button").click();
    cy.url().should("equal", "http://localhost:3000/profile");
  });

  it("should logout from user's account", () => {
    cy.login().then(() => {
      cy.visit(url);
      cy.get(".user-profile").click();
      cy.get(".logout-button").click().should(() => {
        expect(window.localStorage.getItem('token')).to.be.null;
      });      
    })
  })
})