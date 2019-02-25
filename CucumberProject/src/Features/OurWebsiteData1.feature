@OurWebsiteData1
Feature: OurWebsiteData1 is signup with assorted data
  As a user I want to define multiple new accout in OurWebsiteData1 signup page

  Scenario Outline: I want to write a new account in OurWebsiteData1 page
    Given I am on OurWebsiteData1 page to test multiple account
    When I write "<firstname>" at firstname textbox, "<lastname>" at lastname textbox, "<email>" at email textbox, "<cemail>" at cemail textbox, "<1215PR>" at password textbox
    And I select "<Month>" at month dropdown box,"<Day>" at day dropdown box,"<Year>" at year dropdown box
    And I click on "<Sex>" at sex radio button
    Then I could able to create multiple new account at OurWebsiteData1 successfully

    Examples: 
      | firstname | lastname | email           | cemail          | password | Month | Day | Year | Sex    |
      | prova     | islam    | islam@gmail.com | islam@gmail.com | 3333uu   | Feb   |   8 | 1999 | Female |
      | Mak       | shahid   | mak@yahoo.com   | mak@yahoo.com   | 4444dd   | Mar   |   4 | 1989 | Male   |
      | Onik      | Rahman   | onik@gmail.com  | onik@gmail.com  | 555ff    | Apr   |   6 | 1988 | Male   |
