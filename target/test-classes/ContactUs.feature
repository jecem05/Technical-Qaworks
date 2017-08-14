@Josh
Feature: Contact Us Page
  As an end user
  I want a contact us page
  So that I can find out more about QAWorks exciting services!!

  Scenario: Valid Submission
    Given I am on the "Landing" page
    When I click on "Contact" link
    Then I should be able to contact QAWorks with the following information
      | j.Bloggs | j.Bloggs@qaworks.com | please contact me I want to find out more |
