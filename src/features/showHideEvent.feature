Feature: Show/Hide an event details

Scenario: An event element is collapsed by default
Given a user is on the homepage
When there hasn't been any interaction yet
Then all the events are collapsed

Scenario: User can expand an event to see its details
Given the list of events in the homepage
When the user clicks on one of them
Then the element expands showing the details

Scenario: User can collapse an event to hide its details
Given an expanded element
When the user clicks on Hide Event
Then the element collapses