@FacebookData
Feature: Facebook signup by multiple data
  As a user I want to create multiple new account in facebook singnup page

  Scenario Outline: I want to create a new account in facebook singnup page
    Given I am on facebook signup page for multiple account
    When I enter "<FirstName>" in Firstname textbox, "<LastName>" in Lastname textbox, "<Email>" in Email textbox,  "<ConfirmEmail>" in confirm email textbox, "<Password>" in password textbox
    And I select "<Month>" from month dropdown box, "<Day>" from day dropdown box, "<Year>" from year dropdown box
    And i click on "<Sex>" Radio button
    And I click on SignUp button
    Then I should able to create multiple  new facebook account

    Examples: 
      | FirstName | LastName | Email                 | ConfirmEmail          | Password | Month | Day | Year | Sex    |
      | Maksud    | Islam    | maksud.bksp@gmail.com | maksud.bksp@gmail.com | 12345y   | Jan   |   4 | 1999 | Male   |
      | Ataur     | Rahman   | rahman@yahoo.com      | rahman@yahoo.com      | 45678e   | Feb   |   5 | 1993 | Male   |
      | parvin    | sultana  | parvin@yahoo.com      | parvin@yahoo.com      | 787t     | Mar   |  10 | 1990 | Female |
      | Maksud    | Islam    | maksud.bksp@gmail.com | maksud.bksp@gmail.com | 12345y   | Jan   |   4 | 1999 | Male   |
      | Ataur     | Rahman   | rahman@yahoo.com      | rahman@yahoo.com      | 45678e   | Feb   |   5 | 1993 | Male   |
      | parvin    | sultana  | parvin@yahoo.com      | parvin@yahoo.com      | 787t     | Mar   |  10 | 1990 | Female |
      
