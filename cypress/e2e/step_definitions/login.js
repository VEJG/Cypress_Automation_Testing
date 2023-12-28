import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { loginPage } from "@pages/LoginPage";

Given("The user is on the quales landing page", ()  => {
   loginPage.visitQualesApp();
});

When("The user types in their correct username and password", () => {
    cy.get('[data-testid="EmailAddress"]').type(Cypress.env("username"));
    cy.get('[data-testid="Password"]').type(Cypress.env("password"));
    cy.get('.MuiButton-contained').click()
});


Then("The user should be logged into the app", () => {
    loginPage.verifySuccessfulLogin();
});


