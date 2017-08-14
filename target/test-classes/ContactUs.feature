@TestCompleted
Feature: Contact Us Page
As an end user
I want a contact us page
So that I can find out more about QAWorks exciting services!!

@Test
Scenario: Valid Submission
Given I am on the "Landing Page"
When I click on "Contact" tab
And "Contact Page" is displayed
Then I should be able to contact QAWorks with the following information
 | j.Bloggs | j.Bloggs@qaworks.com | please contact me I want to find out more |
    
    
