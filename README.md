# Submission for CruzHacks2023 Organizer Front End Challenge

This project was made with ReactJS, bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Make sure you have NodeJS installed, and run the command

### `npm install`

to install all of the dependencies this project uses.
NOTE: if npm install is throwing errors about not being able to resolve conflicts or dependencies, try setting legacy-peer-deps to true in npm config, and then run 'npm install'.

In the project directory, run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

---
# Design

## Visual Design
The visual design for this component was referenced from [here](https://www.figma.com/file/CJf6HOwmk8kFCPr0pUanyf/CruzHacks-Frontend-Challenge-2023?type=design&node-id=0-1&t=0Y7LpcFky8qzwTKS-0), and the component was made with ReactJS, with JSX, and CSS.
I approached this project by breaking up the design into groups, and seeing what components were encapsulated in a bigger element. For example, the main container containing the schedule was wrapped by another div that handled the placement of the 'Schedule' title, and the buttons on the side.

## Program Design
I separated each component into functions. For complex components like ScheduleBox and ScheduleContents, they called on other functions that refer to the component's children.
The Schedule component took in data from a local JSON file, which contains the date and the events (with properties like name, time, and clickable) and displayed it in a table. I created a map that mapped every individual event to a row in the table, and displayed it accordingly. Events that have the ```clickable``` property to ```true``` display a popup menu that allows the user to register for the event. This was acheived with packages [ReactToolTip](https://www.npmjs.com/package/react-tooltip) and [ReactTooltipController](https://www.npmjs.com/package/react-tooltip-controller)

---

## Challenges
The most challenging portion of the project for me was getting the schedule as data, and passing it into the components, as I had little experience getting data from an exteral http link. I was met with a No-CORS Policy error when using HTTP GET from FetchAPI, and am unaware of how to fix the issue without modifying something on the server end. As a solution, I copied the data from the website into a local data.JSON file, and allowed my program to parse it from there.


