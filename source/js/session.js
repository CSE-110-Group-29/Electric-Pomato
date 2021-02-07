/* *
 * Author: Donald Wolfson, Justin Lee, Enrique Gan
 * Updated By: (Any names of people who've done some editing of the file)
 * Date: 02/07/2021
 * Github Issue: https://github.com/DonaldWolfson/cse110-w21-group29/issues/12
 * Description: This will be the main controller block, AKA the session. This
 *  script will communicate with the index.html (and possibly other pages), and
 *  send inputs from HTML to their respective function calls to the backend
 *  libraries.
 *  
 *  IF YOU DON'T LIKE THE NAMES OF ANYTHING NOW IS THE TIME TO CHANGE THEM!
 *      I promise I won't be offended :)
 * */

/** Global Values: (TODO)                                                  **/
//     Will hold DOM data on HTML elements (buttons, forms, etc.)
//     The ID's and names aren't final, and don't connect to anything in HTML.
//     Just made them in hopes of simulating some processes better.
//     These are defined based on the design Teresa made, check the Project 
//     Pitch do for context.

// Figure 1:
let returningUserBtn = document.getElementById("returningUserBtn");
let newUserNameForm = document.getElementById("newUserNameForm");
// Figure 2:
let newTaskListForm = document.getElementById("newTaskListForm");
let addTaskBtn = document.getElementById("addTaskBtn");
let startDayForm = document.getElementById("startDayForm");
let displayName = document.getElementById("displayName");
// Figure 3a-c:
// Unsure about the add task button in 3c, could it also use addTaskBtn?
let startFirstTaskBtn = document.getElementById("startFirstTaskBtn");
let currentTaskDisplay = document.getElementById("currentTaskDisplay");
let timerDisplay = document.getElementById("timerDisplay")
let showTaskListTab = document.getElementById("showTaskListTab");
let taskListDisplay = document.getElementById("taskListDisplay");
let completedListDisplay = document.getElementById("completedListDisplay")
// Figure 4-b, 5a:
// Unsure if we can also use timerDisplay here as well.
let finishedEarlyBtn = document.getElementById("finishedEarlyBtn");
let needMoreTimeBtn = document.getElementById("needMoreTimeBtn");
let breakTaskDisplay = document.getElementById("breakTaskDisplay");
// Figure 5b:
let addAnotherTaskBtn = document.getElementById("addAnotherTaskBtn");
let continueFinalBreakBtn = document.getElementById("continueFinalBreakBtn");
// Figure 6:
let recordsDisplay = document.getElementById("recordsDisplay")

/** Event Listeners: (TODO)                                                  **/
//      Add event listeners for the elements above, and map them to helper funcitons.

/** Helper Methods: (TODO)                                                   **/
//      Based on the System Diagram: https://github.com/DonaldWolfson/cse110-w21-group29/blob/main/specs/brainstorm/System%20Diagram.jpg

// Timer Related Helper Methods:
//  Unsure where the front end values ()

function startTaskHandler() {
    // TODO: Start a generic 25:00 timer.
}

function startShortBreakHandler() {
    // TODO: Start a short break 5:00 timer.
}

function startLongBreakHandler() {
    // TODO: Start a long break 25:00 timer.
}

function updateTimerDisplay() {
    // TODO: Update timer display every second.
}

// Task List Related Helper Methods:

function addTaskHandler() {
    // TODO: Add a new task to the taskList object.
}

function removeTaskHandler() {
    // TODO: Remove a task from the taskList object.
}

function editTaskHandler() {
    // TODO:"Edit an existing task.
}

// HTML related Helper Methods:



// Misc. Helper Methods: