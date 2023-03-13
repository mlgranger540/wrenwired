import {storyImgs} from "./objects/scene1_objects.js";

/**
 * Declare variables
 */
let viewportWidth;
let modal;
let log;
let logList;
let storyFrame;
let footer;
let startingPoint;
let startingPointN;
let startingPointE;
let startingPointS;
let startingPointW;
let compass;
let turnLeft;
let turnRight;
let continueButton1;
let continueButton2;
let continueButton3;
let text1;

/**
 * Assign variables on page load
 */
window.onload = (event) => {
    viewportWidth = window.innerWidth;
    modal = document.getElementById("modal");
    log = document.getElementsByClassName("panel")[0];
    logList = document.getElementById("log-list");
    storyFrame = document.getElementById("story-frame-1");
    footer = document.getElementsByTagName("footer")[0];
    startingPoint = document.getElementById("starting-point-img");
    startingPointN = storyImgs.startingPointNImg;
    startingPointE = storyImgs.startingPointEImg;
    startingPointS = storyImgs.startingPointSImg;
    startingPointW = storyImgs.startingPointWImg;
    compass = document.getElementById("compass");
    turnLeft = document.getElementsByName("turn-left")[0];
    turnRight = document.getElementsByName("turn-right")[0];
    continueButton1 = document.getElementById("continue-1");
    continueButton2 = document.getElementById("continue-2");
    continueButton3 = document.getElementById("continue-3");
    text1 = document.getElementById("text-1");
};


/**
 * Modal play button
 */
window.play = function() {
    storyFrame.hidden = false;
    footer.hidden = false;
    modal.hidden = true;
}

/**
 * Open log side panel
 * Toggles panel open and closed by toggling hidden property between true and false
 * Arrow direction of button changes and button is moved to stick to right edge of panel (varies by viewport width)
 */
window.openLog = function() {
    let openLogButton = document.getElementById("open-log");
    if (log.hidden === true ) {
        log.hidden = false;
        openLogButton.innerHTML = '<i class="fa-solid fa-chevron-left"></i>';
        if (viewportWidth < 427) {
            openLogButton.style.left = "91%";
        } else if (viewportWidth < 768) {
            openLogButton.style.left = "44%";
        } else {
            openLogButton.style.left = "22%";
        }
    } else {
        log.hidden = true;
        openLogButton.style.left = "0%";
        openLogButton.innerHTML = '<i class="fa-solid fa-chevron-right"></i>';
    }
}

/**
 * Turn button functions
 * 
 */
window.cycleRight = function(element) {
    switch (element.id) {
        case "turn-right-1":
            startingPoint.src = startingPointE.src
            startingPoint.alt = startingPointE.alt
            startingPoint.title = startingPointE.title
            compass.innerHTML = "<p>E</p>"
            element.id = startingPointE.next_right
            turnLeft.id = startingPointE.next_left
            console.log("Turn north to east");
            let logTurnNtoE = document.createElement("li");
            logTurnNtoE.innerHTML = "You turned from north to east.";
            logList.appendChild(logTurnNtoE);
            break;
        case "turn-right-2":
            startingPoint.src = startingPointS.src
            startingPoint.alt = startingPointS.alt
            startingPoint.title = startingPointS.title
            compass.innerHTML = "<p>S</p>"
            element.id = startingPointS.next_right
            turnLeft.id = startingPointS.next_left
            console.log("Turn east to south");
            let logTurnEtoS = document.createElement("li");
            logTurnEtoS.innerHTML = "You turned from east to south.";
            logList.appendChild(logTurnEtoS);
            break;
        case "turn-right-3":
            startingPoint.src = startingPointW.src
            startingPoint.alt = startingPointW.alt
            startingPoint.title = startingPointW.title
            compass.innerHTML = "<p>W</p>"
            element.id = startingPointW.next_right
            turnLeft.id = startingPointW.next_left
            console.log("Turn south to west");
            let logTurnStoW = document.createElement("li");
            logTurnStoW.innerHTML = "You turned from south to west.";
            logList.appendChild(logTurnStoW);
            break;
        case "turn-right-4":
            startingPoint.src = startingPointN.src
            startingPoint.alt = startingPointN.alt
            startingPoint.title = startingPointN.title
            compass.innerHTML = "<p>N</p>"
            element.id = startingPointN.next_right
            turnLeft.id = startingPointN.next_left
            console.log("Turn west to north");
            let logTurnWtoN = document.createElement("li");
            logTurnWtoN.innerHTML = "You turned from west to north.";
            logList.appendChild(logTurnWtoN);
            break;
    }
}

window.cycleLeft = function(element) {
    switch (element.id) {
        case "turn-left-1":
            startingPoint.src = startingPointW.src
            startingPoint.alt = startingPointW.alt
            startingPoint.title = startingPointW.title
            compass.innerHTML = "<p>W</p>"
            element.id = startingPointW.next_left
            turnRight.id = startingPointW.next_right
            console.log("Turn north to west");
            let logTurnNtoW = document.createElement("li");
            logTurnNtoW.innerHTML = "You turned from north to west.";
            logList.appendChild(logTurnNtoW);
            break;
        case "turn-left-2":
            startingPoint.src = startingPointS.src
            startingPoint.alt = startingPointS.alt
            startingPoint.title = startingPointS.title
            compass.innerHTML = "<p>S</p>"
            element.id = startingPointS.next_left
            turnRight.id = startingPointS.next_right
            console.log("Turn west to south");
            let logTurnWtoS = document.createElement("li");
            logTurnWtoS.innerHTML = "You turned from west to south.";
            logList.appendChild(logTurnWtoS);
            break;
        case "turn-left-3":
            startingPoint.src = startingPointE.src
            startingPoint.alt = startingPointE.alt
            startingPoint.title = startingPointE.title
            compass.innerHTML = "<p>E</p>"
            element.id = startingPointE.next_left
            turnRight.id = startingPointE.next_right
            console.log("Turn south to east");
            let logTurnStoE = document.createElement("li");
            logTurnStoE.innerHTML = "You turned from south to east.";
            logList.appendChild(logTurnStoE);
            break;
        case "turn-left-4":
            startingPoint.src = startingPointN.src
            startingPoint.alt = startingPointN.alt
            startingPoint.title = startingPointN.title
            compass.innerHTML = "<p>N</p>"
            element.id = startingPointN.next_left
            turnRight.id = startingPointN.next_right
            console.log("Turn east to north");
            let logTurnEtoN = document.createElement("li");
            logTurnEtoN.innerHTML = "You turned from east to north.";
            logList.appendChild(logTurnEtoN);
            break;
    }
}


/**
 * Continue button functions
 * Changes text of p element in textbox on click, updates the element's ID number, then hides continueButtonN and displays continueButtonN+1
 */
window.continue1 = function() {
    text1.innerHTML = "You are in the middle of an empty field. You don't remember how you got there.";
    text1.id = "text-2";
    continueButton1.hidden = true;
    continueButton2.hidden = false;
}

window.continue2 = function() {
    let text2 = document.getElementById("text-2");
    text2.innerHTML = "You don't remember... anything.";
    text2.id = "text-3";
    continueButton2.hidden = true;
    continueButton3.hidden = false;
}

window.continue3 = function() {
    let text3 = document.getElementById("text-3");
    let continueButton3 = document.getElementById("continue-3");
    text3.innerHTML = "Actually... after a second, you do remember one thing. Your name.";
    text3.id = "text-4";
    continueButton3.hidden = true;
}


/**
 * Invisible buttons to progress to the next page
 */
window.moveToScene2 = function() {
    console.log("You found the way forward!");
    window.location.href = "page2.html";
}


/**
 * Refresh button reloads page on click
 */
window.refreshPage = function() {
    window.location.reload();
}