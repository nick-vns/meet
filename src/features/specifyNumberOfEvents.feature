Feature: Specify number of events.

Scenario: When user hasn’t specified a number, 50 is the default number.
Given the web application has been loaded
When user didnt filter amount of events
Then default number of events 50 will be displayed to user

Scenario: User can change the number of events they want to see.
Given user specified number of events
When user runs a search
Then user will receive specified number of events