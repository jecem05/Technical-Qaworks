$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ContactUs.feature");
formatter.feature({
  "line": 2,
  "name": "Contact Us Page",
  "description": "As an end user\r\nI want a contact us page\r\nSo that I can find out more about QAWorks exciting services!!",
  "id": "contact-us-page",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@TestCompleted"
    }
  ]
});
formatter.before({
  "duration": 8057566774,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Valid Submission",
  "description": "",
  "id": "contact-us-page;valid-submission",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I am on the \"Landing Page\"",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I click on \"Contact\" tab",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "\"Contact Page\" is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I should be able to contact QAWorks with the following information",
  "rows": [
    {
      "cells": [
        "j.Bloggs",
        "j.Bloggs@qaworks.com",
        "please contact me I want to find out more"
      ],
      "line": 13
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Landing Page",
      "offset": 13
    }
  ],
  "location": "ContactUs.i_am_on_the(String)"
});
formatter.result({
  "duration": 156403431,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Contact",
      "offset": 12
    }
  ],
  "location": "ContactUs.i_click_on_tab(String)"
});
formatter.result({
  "duration": 27423214,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: //*[@id\u003d\u0027menu\u0027]/li[1]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027LAPTOP-0DL13R8O\u0027, ip: \u0027192.168.1.75\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{moz:profile\u003dC:\\Users\\Ace\\AppData\\Local\\Temp\\rust_mozprofile.j56J4LmCvUZ3, rotatable\u003dfalse, timeouts\u003d{implicit\u003d0.0, pageLoad\u003d300000.0, script\u003d30000.0}, pageLoadStrategy\u003dnormal, platform\u003dANY, specificationLevel\u003d0.0, moz:accessibilityChecks\u003dfalse, acceptInsecureCerts\u003dfalse, browserVersion\u003d55.0, platformVersion\u003d10.0, moz:processID\u003d5276.0, browserName\u003dfirefox, javascriptEnabled\u003dtrue, platformName\u003dwindows_nt}]\nSession ID: bd5cc5aa-83c3-49cd-8d6a-416a984e97de\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\u0027menu\u0027]/li[1]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:150)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:115)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:637)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:410)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:509)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:402)\r\n\tat test.pageObject.Contact_Us_Page.click_contact_tab(Contact_Us_Page.java:23)\r\n\tat test.StepDef.ContactUs.i_click_on_tab(ContactUs.java:47)\r\n\tat ✽.When I click on \"Contact\" tab(ContactUs.feature:10)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Contact Page",
      "offset": 1
    }
  ],
  "location": "ContactUs.is_displayed(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ContactUs.i_should_be_able_to_contact_QAWorks_with_the_following_information(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 2101992745,
  "status": "passed"
});
});