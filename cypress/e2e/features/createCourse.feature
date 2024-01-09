Feature: The user should be able to create new course
   
    user should be able to create/add new course to the profile...
      //Then the new course should be created 

Scenario: create new course
   Given  The user is logged in and able to click the add course btn
   When  The user fills in the appropriate data and clicks add course 
   Then The user gets a verification that course was created successfully
