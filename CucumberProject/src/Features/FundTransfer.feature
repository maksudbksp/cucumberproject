@Fundtransfer
Feature: Fund Transfer funtionality
  As a user I want to transfer fund to my friend or family
@VPVA
  Scenario: Valid payee and valid amount
    Given I am on fund transfer web page
    When I select valid payee "Jim"
    And I enter valid amount "500"
    And I click on transfer button
    Then I should get success message "$500 transferred successfully to Jim!!"
@VPIVA
  Scenario: Valid payee and Invalid amount
    Given I am on fund transfer web page
    When I select valid payee "Jim"
    And I enter invalid amount "6000"
    And I click on transfer button
    Then I should get fail message "Transfer failed!! account cannot be overdraw"
@IPVA
  Scenario: Invalid payee and valid amount
    Given I am on fund transfer web page
    When I select invalid payee "John"
    And I enter valid amount "500"
    And I click on transfer button
    Then I should get fail message "Transfer failed!! 'John' is not approved. Please contact your branch"
