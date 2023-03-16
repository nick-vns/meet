Feature: Show/hide event details

Scenario: An event element is collapsed by default.
Given an event info has been displayed
When user receives a list of uncoming events
Then the event will show a block with general info

Scenario: User can expand an event to see its details.
Given user saw a block with general details about an event
When user opens a module with expanded info
Then all info about an event will be displayed

Scenario: User can collapse an event to hide its details.
Given an event's block showed all info
When user interacts with a module show/hide
Then all info will be hidden, user will have general info