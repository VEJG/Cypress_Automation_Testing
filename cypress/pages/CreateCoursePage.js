class CreateCoursePage {
    elements = {
        openApp: () => cy.visit("/login"),
        usernameInputField: () => cy.get(' [data-testid="EmailAddress"]'),
        passwordInputField: () => cy.get('[data-testid="Password"]'),
        loginBtn: () => cy.get(".MuiButton-contained"),
        addCourseBtn: () => cy.get('.MuiGrid-root > .MuiButtonBase-root'),
        tittleInputField: () => cy.get('[data-testid="Title*"]'),
        descriptionInputField: () => cy.get('[data-testid="Description*"]'),
        categoryDropdown: () => cy.get("#demo-simple-select"),
        selectCategory: () => cy.get('[data-value="1"]'),
        imageUrlInputField: () => cy.get('[data-testid="ImageURL"]'),
        locationBtn: () => cy.get('[data-testid="offline"]'),
        addressInputField: () => cy.get('[data-testid="Address*"]'),
        submitBtn: () => cy.get(".css-tzsjye > .MuiButton-root"),
        courseCreatedSuccessfully: () => cy.contains("Course created successfully"),
    };
    visitQualesApp() {
        this.elements.openApp();
    }

    typeUsernameAndPassword() {
        this.elements.usernameInputField().type(Cypress.env("username")),
        this.elements.passwordInputField().type(Cypress.env("password"));
    }

    clickLoginBtn() {
       this.elements.loginBtn().click();
    }


    clickAddCourseBtn() {
       this.elements.addCourseBtn().click();
    }
       


    typeTitleField() {
       this.elements.tittleInputField().type("VEJG Automated testing", { force: true});
    }

    typeDescriptionField() {
        this.elements
          .descriptionInputField()
          .type("learning how to run automated test using cypress");
    }


    chooseCategoryType() {
        this.elements.categoryDropdown().click(),
         this.elements.selectCategory().click();
    }
        
     chooseLocationType() {
        this.elements.locationBtn().check();
     }
        
    typeImageURL() {
        this.elements
         .imageUrlInputField()
         .type("https://source.unsplash.com/user/c_v_r/900");
    }
    
    typeAddressField() {
        this.elements.addressInputField().type("Quales headquaters");
    }

    clickSubmitBtn() {
        this.elements.submitBtn().click();
    }

    verifyCourseCreatedSuccessfully() {
        this.elements.courseCreatedSuccessfully().should("be.visible");
    }
}

export const createCoursePage = new CreateCoursePage();