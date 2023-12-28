class LoginPage {
    elements = {
      openApp: () => cy.visit("/login",),
      usernameInputField: () =>  cy.get('[data-testid="EmailAddress"]'),
      passwordInputField: () =>  cy.get('[data-testid="Password"]'),
      loginBtn: () => cy.get('.MuiButton-contained'),
      addCourseBtn: () => cy.contains("Add Course"),
};

visitQualesApp() {
    this.elements.openApp();
 }

verifySuccessfulLogin() {
    this.elements.addCourseBtn().should("be.visible");
 }
}


export const loginPage = new LoginPage();
 