$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Facebook.feature");
formatter.feature({
  "line": 2,
  "name": "Facebook signup",
  "description": "As a user I want to create a new account in facebook singnup page",
  "id": "facebook-signup",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Facebook"
    }
  ]
});
formatter.before({
  "duration": 4246636127,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "I want to create a new account in facebook singnup page",
  "description": "",
  "id": "facebook-signup;i-want-to-create-a-new-account-in-facebook-singnup-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I am on facebook signup page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter \"Maksud\" in firstname textbox, \"Islam\" in lastname textbox, \"islam@yahoo.com\" in email textbox,  \"islam@yahoo.com\" in confirm email textbox, \"4rr23\" in password textbox",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I select \"May\" from Month dropdown box, \"12\" from day dropdown box, \"1980\" from year dropdown box",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "i click on \"Male\" radio button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on Signup button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I should able to create  new facebook account",
  "keyword": "Then "
});
formatter.match({
  "location": "FacebookStepdefinition.i_am_on_facebook_signup_page()"
});
formatter.result({
  "duration": 16190395766,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Maksud",
      "offset": 9
    },
    {
      "val": "Islam",
      "offset": 40
    },
    {
      "val": "islam@yahoo.com",
      "offset": 69
    },
    {
      "val": "islam@yahoo.com",
      "offset": 106
    },
    {
      "val": "4rr23",
      "offset": 150
    }
  ],
  "location": "FacebookStepdefinition.i_enter_in_firstname_textbox_in_lastname_textbox_in_email_textbox_in_confirm_email_textbox_in_password_textbox(String,String,String,String,String)"
});
formatter.result({
  "duration": 2007910706,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "May",
      "offset": 10
    },
    {
      "val": "12",
      "offset": 41
    },
    {
      "val": "1980",
      "offset": 69
    }
  ],
  "location": "FacebookStepdefinition.i_select_from_Month_dropdown_box_from_day_dropdown_box_from_year_dropdown_box(String,String,String)"
});
formatter.result({
  "duration": 3367442898,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Male",
      "offset": 12
    }
  ],
  "location": "FacebookStepdefinition.i_click_on_radio_button(String)"
});
formatter.result({
  "duration": 173957007,
  "status": "passed"
});
formatter.match({
  "location": "FacebookStepdefinition.i_click_on_Signup_button()"
});
formatter.result({
  "duration": 159624397,
  "status": "passed"
});
formatter.match({
  "location": "FacebookStepdefinition.i_should_able_to_create_new_facebook_account()"
});
formatter.result({
  "duration": 113652,
  "status": "passed"
});
formatter.after({
  "duration": 2344702307,
  "status": "passed"
});
formatter.uri("FundTransfer.feature");
formatter.feature({
  "line": 2,
  "name": "Fund Transfer funtionality",
  "description": "As a user I want to transfer fund to my friend or family",
  "id": "fund-transfer-funtionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Fundtransfer"
    }
  ]
});
formatter.before({
  "duration": 3461584497,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Valid payee and valid amount",
  "description": "",
  "id": "fund-transfer-funtionality;valid-payee-and-valid-amount",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@VPVA"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on fund transfer web page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I select valid payee \"Jim\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter valid amount \"500\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on transfer button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I should get success message \"$500 transferred successfully to Jim!!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "FundTransferStepDefinition.i_am_on_fund_transfer_web_page()"
});
formatter.result({
  "duration": 132424571,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jim",
      "offset": 22
    }
  ],
  "location": "FundTransferStepDefinition.i_select_valid_payee(String)"
});
formatter.result({
  "duration": 84727363,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 22
    }
  ],
  "location": "FundTransferStepDefinition.i_enter_valid_amount(String)"
});
formatter.result({
  "duration": 104514891,
  "status": "passed"
});
formatter.match({
  "location": "FundTransferStepDefinition.i_click_on_transfer_button()"
});
formatter.result({
  "duration": 75432444,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$500 transferred successfully to Jim!!",
      "offset": 30
    }
  ],
  "location": "FundTransferStepDefinition.i_should_get_success_message(String)"
});
formatter.result({
  "duration": 52155310,
  "status": "passed"
});
formatter.after({
  "duration": 62349628,
  "status": "passed"
});
formatter.before({
  "duration": 3536572905,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Valid payee and Invalid amount",
  "description": "",
  "id": "fund-transfer-funtionality;valid-payee-and-invalid-amount",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@VPIVA"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on fund transfer web page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I select valid payee \"Jim\"",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I enter invalid amount \"6000\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on transfer button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should get fail message \"Transfer failed!! account cannot be overdraw\"",
  "keyword": "Then "
});
formatter.match({
  "location": "FundTransferStepDefinition.i_am_on_fund_transfer_web_page()"
});
formatter.result({
  "duration": 121309709,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jim",
      "offset": 22
    }
  ],
  "location": "FundTransferStepDefinition.i_select_valid_payee(String)"
});
formatter.result({
  "duration": 122663715,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6000",
      "offset": 24
    }
  ],
  "location": "FundTransferStepDefinition.i_enter_invalid_amount(String)"
});
formatter.result({
  "duration": 104702171,
  "status": "passed"
});
formatter.match({
  "location": "FundTransferStepDefinition.i_click_on_transfer_button()"
});
formatter.result({
  "duration": 122164931,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Transfer failed!! account cannot be overdraw",
      "offset": 27
    }
  ],
  "location": "FundTransferStepDefinition.i_should_get_fail_message(String)"
});
formatter.result({
  "duration": 74535311,
  "error_message": "java.lang.AssertionError: expected [Transfer failed!! account cannot be overdraw] but found [Transfer failed!! account cannot be overdrawn]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:137)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:453)\r\n\tat org.testng.Assert.assertEquals(Assert.java:463)\r\n\tat StepPack.FundTransferStepDefinition.i_should_get_fail_message(FundTransferStepDefinition.java:63)\r\n\tat ✽.Then I should get fail message \"Transfer failed!! account cannot be overdraw\"(FundTransfer.feature:17)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 157179559,
  "status": "passed"
});
formatter.before({
  "duration": 3425759958,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Invalid payee and valid amount",
  "description": "",
  "id": "fund-transfer-funtionality;invalid-payee-and-valid-amount",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 18,
      "name": "@IPVA"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I am on fund transfer web page",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I select invalid payee \"John\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I enter valid amount \"500\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click on transfer button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I should get fail message \"Transfer failed!! \u0027John\u0027 is not approved. Please contact your branch\"",
  "keyword": "Then "
});
formatter.match({
  "location": "FundTransferStepDefinition.i_am_on_fund_transfer_web_page()"
});
formatter.result({
  "duration": 167826219,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "John",
      "offset": 24
    }
  ],
  "location": "FundTransferStepDefinition.i_select_invalid_payee(String)"
});
formatter.result({
  "duration": 144235693,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 22
    }
  ],
  "location": "FundTransferStepDefinition.i_enter_valid_amount(String)"
});
formatter.result({
  "duration": 76406981,
  "status": "passed"
});
formatter.match({
  "location": "FundTransferStepDefinition.i_click_on_transfer_button()"
});
formatter.result({
  "duration": 68802870,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Transfer failed!! \u0027John\u0027 is not approved. Please contact your branch",
      "offset": 27
    }
  ],
  "location": "FundTransferStepDefinition.i_should_get_fail_message(String)"
});
formatter.result({
  "duration": 49110872,
  "status": "passed"
});
formatter.after({
  "duration": 77643183,
  "status": "passed"
});
formatter.uri("OurWebSite.feature");
formatter.feature({
  "line": 2,
  "name": "OurWebsite signup",
  "description": "As a user I want to create a new account in OurWebsite singnup page",
  "id": "ourwebsite-signup",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@OurWebSite"
    }
  ]
});
formatter.before({
  "duration": 3703293944,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "I want to create a new Account in OurWebsite singnup page",
  "description": "",
  "id": "ourwebsite-signup;i-want-to-create-a-new-account-in-ourwebsite-singnup-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I am on OurWebsite Signup page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I Enter \"Ataur\" in FirstName Textbox, \"Torofdar\" in LastName textbox, \"ataur@yahoo.com\" in email textbox,  \"ataur@yahoo.com\" in confirm email textbox, \"233ee4\" in password textbox",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I Select \"Jan\" from Month Dropdown box, \"5\" from day dropdown box, \"2011\" from year dropdown box",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I Click on \"Male\" Radio button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I should able to create a new Account",
  "keyword": "Then "
});
formatter.match({
  "location": "OurWebSiteStepDefinition.i_am_on_OurWebsite_Signup_page()"
});
formatter.result({
  "duration": 199377293,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ataur",
      "offset": 9
    },
    {
      "val": "Torofdar",
      "offset": 39
    },
    {
      "val": "ataur@yahoo.com",
      "offset": 71
    },
    {
      "val": "ataur@yahoo.com",
      "offset": 108
    },
    {
      "val": "233ee4",
      "offset": 152
    }
  ],
  "location": "OurWebSiteStepDefinition.i_Enter_in_FirstName_Textbox_in_LastName_textbox_in_email_textbox_in_confirm_email_textbox_in_password_textbox(String,String,String,String,String)"
});
formatter.result({
  "duration": 713610598,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jan",
      "offset": 10
    },
    {
      "val": "5",
      "offset": 41
    },
    {
      "val": "2011",
      "offset": 68
    }
  ],
  "location": "OurWebSiteStepDefinition.i_Select_from_Month_Dropdown_box_from_day_dropdown_box_from_year_dropdown_box(String,String,String)"
});
formatter.result({
  "duration": 380579708,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Male",
      "offset": 12
    }
  ],
  "location": "OurWebSiteStepDefinition.i_Click_on_Radio_button(String)"
});
formatter.result({
  "duration": 105930066,
  "status": "passed"
});
formatter.match({
  "location": "OurWebSiteStepDefinition.i_should_able_to_create_a_new_Account()"
});
formatter.result({
  "duration": 124224,
  "status": "passed"
});
formatter.after({
  "duration": 86913182,
  "status": "passed"
});
});