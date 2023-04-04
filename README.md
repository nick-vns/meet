# Meet_app

## Description 

The app that has been build using React with test-driven-development (TDD) technique that will allow users to see details of upcoming events in different cities including day, time, month using Google Calendar API.

## Serverless functions usage
The app would use serverless functions (AWS lambda) for the authorization server.

## Links
See the project in [Live Demo](https://nick-vns.github.io/meet/)

## Techstack
+ React
+ AWS Lamda 
+ Jest
+ Puppeteer 
+ Atatus

## Key Feature 
+ Filter events by different cities.
+ Module that will allow show and hide details of event.
+ Filter amout of events that could be displayed.
+ Allow users to navigate in an app offline.

## Dependencies 
    "@testing-library/jest-dom": "^5.16.2",
    "@testing-library/react": "^11.2.7",
    "@testing-library/user-event": "^12.8.3",
    "atatus-spa": "^4.5.0",
    "axios": "^1.3.4",
    "nprogress": "^0.2.0",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-scripts": "5.0.1",
    "recharts": "^2.5.0",
    "web-vitals": "^2.1.4",
    "workbox-background-sync": "^6.5.4",
    "workbox-broadcast-update": "^6.5.4",
    "workbox-cacheable-response": "^6.5.4",
    "workbox-core": "^6.5.4",
    "workbox-expiration": "^6.5.4",
    "workbox-google-analytics": "^6.5.4",
    "workbox-navigation-preload": "^6.5.4",
    "workbox-precaching": "^6.5.4",
    "workbox-range-requests": "^6.5.4",
    "workbox-routing": "^6.5.4",
    "workbox-strategies": "^6.5.4",
    "workbox-streams": "^6.5.4"
    
    
## Screenshots 
![Sign in page](meet/signin.png)


## User stories and scenarios 
### Feature 1: Filter events by city
User story: As a user I'd like to see events in particular city.

**Scenario 1: When user hasn’t searched for specific city, show upcoming events from all cities.**
+ **Given** user opened the web application 
+ **When** user hasn't searched for city
+ **Then** all events shoud be displayed to user

**Scenario 2: User should see a list of suggestions when they search for city.**
+ **Given** page is open, all events are displayed
+ **When** user type something in search bar
+ **Then** according to the first letter, user should see the list of the cities

**Scenario 3: When the user searches for city, a list of upcoming events in this city should be shown.**
+ **Given** user typed name of the city and see suggested cities in a list
+ **When** user select a city particular city from the list.
+ **Then** user should be redirected to the city that had been chosen and see all events in the city

### Feature 2: Show/Hide event's details.
User story: As a user, I'd like to be able to open the details of an event as well as close it.

**Scenario 1: An event element is collapsed by default.**
+ **Given** an event info has been displayed
+ **When** user receives a list of uncoming events
+ **Then** the event will show a block with general info

**Scenario 2: User can expand an event to see its details.**
+ **Given** user saw a block with general details about an event
+ **When** user opens a module with expanded info
+ **Then** all info about an event will be displayed 

**Scenario 3: User can collapse an event to hide its details.**
+ **Given** an even's block showed all info 
+ **When** user interacts with a module show/hide
+ **Then** all info will be hidden, user will general info

### FEATURE 3: SPECIFY NUMBER OF EVENTS
User story: As a user, I'd like to be able filter certain amout of events that will be visible to me.

**Scenario 1: When user hasn’t specified a number, 32 is the default number.**
+ **Given** the web application has been loaded
+ **When** user didnt filter amount of events
+ **Then** default number of events (32) will be displayed to user

**Scenario 2: User can change the number of events they want to see.**
+ **Given** user specified number of events
+ **When** user runs a search 
+ **Then** user will receive specified number of events

### FEATURE 4: USE THE APP WHEN OFFLINE
User story: As a user I'd like to have an access to event offline that had been viewed in online mode.

**Scenario 1: Show cached data when there’s no internet connection.**
+ **Given** the page has been viewed with internet connection
+ **When** user reviews page in offline mode
+ **Then** user will receive data that had been viewed in online mode

**Scenario 2: Show error when user changes the settings (city, time range).**
+ **Given** page has been loaded
+ **When** user filter city,time,range
+ **Then** user will receive an error message (no internet connection)

### FEATURE 5: DATA VISUALIZATION
User story: As a user I'd like to see general even's data so I'm aware what events in which cities are happening.

**Scenario 1: Show a chart with the number of upcoming events in each city.**
+ **Given** list of events had been loaded
+ **When** user is looking up for an event in a city
+ **Then** all events in certain city will be displayed by type

