@OurWebSite
Feature: OurWebsite signup
  As a user I want to create a new account in OurWebsite singnup page

  Scenario: I want to create a new Account in OurWebsite singnup page
    Given I am on OurWebsite Signup page
    When I Enter "Ataur" in FirstName Textbox, "Torofdar" in LastName textbox, "ataur@yahoo.com" in email textbox,  "ataur@yahoo.com" in confirm email textbox, "233ee4" in password textbox
    And I Select "Jan" from Month Dropdown box, "5" from day dropdown box, "2011" from year dropdown box
    And I Click on "Male" Radio button
    Then I should able to create a new Account
