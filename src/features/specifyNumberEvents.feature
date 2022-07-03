Feature: Specify number of events

Scenario:  When user hasn’t specified a number, 10 is the default number
Given the user has not specified a number of events to show
When the page loads
Then 10 events should be displayed (unless there are less available)

Scenario: When the user types a number into the textbox, the number of events displayed should match the input number
Given the main page is open
When the user selects a different amount into the textbox
Then the number of events displayed should match the number 