Feature: This feature ensures that the login functionality to the quales app works appropriately
   
   As a user i want to visit the login page successfully so that i can perform some course management tasks

Scenario: Verify that a user can login to the app
   Given  The user is on the quales landing page
   When The user types in their correct username and password
   Then The user should be logged into the app



  