$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Myfeautures.feature");
formatter.feature({
  "line": 1,
  "name": "Test Suite For Hiremee Candidate Login",
  "description": "",
  "id": "test-suite-for-hiremee-candidate-login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 10,
  "name": "Login Hiremee Candidate Login With Valid Credentials",
  "description": "",
  "id": "test-suite-for-hiremee-candidate-login;login-hiremee-candidate-login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Open chrome and start Application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Enter Valid \"otp2@mailnesia.com\" and \"123456\"",
  "matchedColumns": [
    0,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User Should be able to login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "SmokeTest_candidate.Open_chrome_and_start_Application()"
});
formatter.result({
  "duration": 9274642683,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "otp2@mailnesia.com",
      "offset": 13
    },
    {
      "val": "123456",
      "offset": 38
    }
  ],
  "location": "SmokeTest_candidate.Enter_Valid_and(String,String)"
});
formatter.result({
  "duration": 213031405,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest_candidate.User_Should_be_able_to_login_successfully()"
});
formatter.result({
  "duration": 84740886,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Login Hiremee college Login With Valid Credentials",
  "description": "",
  "id": "test-suite-for-hiremee-candidate-login;login-hiremee-college-login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "Open chrome and start Application",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "Enter Valid \"otp2@mailnesia.com\" and \"123456\"",
  "matchedColumns": [
    0,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User Should be able to login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "SmokeTest_candidate.Open_chrome_and_start_Application()"
});
formatter.result({
  "duration": 13112019544,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "otp2@mailnesia.com",
      "offset": 13
    },
    {
      "val": "123456",
      "offset": 38
    }
  ],
  "location": "SmokeTest_candidate.Enter_Valid_and(String,String)"
});
formatter.result({
  "duration": 216063650,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest_candidate.User_Should_be_able_to_login_successfully()"
});
formatter.result({
  "duration": 76430278,
  "status": "passed"
});
});