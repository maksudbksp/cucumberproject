@Facebook
Feature: Facebook signup
  As a user I want to create a new account in facebook singnup page

  Scenario: I want to create a new account in facebook singnup page
    Given I am on facebook signup page
    When I enter "Maksud" in firstname textbox, "Islam" in lastname textbox, "islam@yahoo.com" in email textbox,  "islam@yahoo.com" in confirm email textbox, "4rr23" in password textbox
    And I select "May" from Month dropdown box, "12" from day dropdown box, "1980" from year dropdown box
    And i click on "Male" radio button
    And I click on Signup button
    Then I should able to create  new facebook account
