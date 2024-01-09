import { Given,When,Then } from "@badeball/cypress-cucumber-preprocessor";
import { createCoursePage } from "@pages/CreateCoursePage";

Given("The user is logged in and able to click the add course btn", () => {
    createCoursePage.visitQualesApp();
    createCoursePage.typeUsernameAndPassword();
    createCoursePage.clickLoginBtn();
    createCoursePage.clickAddCourseBtn();
});
When("The user fills in the appropriate data and clicks add course", () => {
    createCoursePage.typeTitleField();
    createCoursePage.typeDescriptionField();
    createCoursePage.chooseCategoryType();
    createCoursePage.typeImageURL();
    createCoursePage.chooseLocationType();
    createCoursePage.typeAddressField();
    createCoursePage.clickSubmitBtn();
});
Then(
    "The user gets a verification that course was created successfully",
    () => {
        createCoursePage.verifyCourseCreatedSuccessfully();
    }
);
    






