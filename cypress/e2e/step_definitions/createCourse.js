import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { coursePage } from "@pages/coursePage";

When("The user fills the course creation form", () => {
    coursePage.fillCourseCreationForm();
});


