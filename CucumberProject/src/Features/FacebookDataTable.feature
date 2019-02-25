Feature: Facebook signup by valid data
  As a user I want to create one new account in facebook singnup page

  Scenario: I want to create one new account in facebook singnup page
    Given I am on facebook signup page for new account
    When I Enter
      | FirstName   | Maksud           |
      | LastName    | Islam            |
      | Email       | Maksud@yahoo.com |
      | ConfirmEmai | maksud@yahoo.com |
      | Password    | r44Maksud        |
    And I Select from dropdownbox
      | Month | May  |
      | Day   |    3 |
      | Year  | 1998 |
    And I Click on Male Radio button
    And I Click on SignUp button
    Then I should able to create one new facebook account
