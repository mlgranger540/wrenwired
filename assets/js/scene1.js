import {storyImgs} from "./objects/scene1_objects.js";

/**
 * Declare variables
 */
let startingPoint;
let startingPointN;
let startingPointE;
let startingPointS;
let startingPointW;
let turnLeft;
let turnRight;
let continueButton1;
let continueButton2;
let text1;
let text2;

/**
 * Assign variables on page load
 */
window.onload = (event) => {
    startingPoint = document.getElementById("starting-point-img");
    startingPointN = storyImgs.startingPointNImg;
    startingPointE = storyImgs.startingPointEImg;
    startingPointS = storyImgs.startingPointSImg;
    startingPointW = storyImgs.startingPointWImg;
    turnLeft = document.getElementsByName("turn-left")[0];
    turnRight = document.getElementsByName("turn-right")[0];
    continueButton1 = document.getElementById("continue-1");
    continueButton2 = document.getElementById("continue-2");
    text1 = document.getElementById("text-1");
};


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
            element.id = startingPointE.next_right
            turnLeft.id = startingPointE.next_left
            console.log("Turned from north to east");
            break;
        case "turn-right-2":
            startingPoint.src = startingPointS.src
            startingPoint.alt = startingPointS.alt
            startingPoint.title = startingPointS.title
            element.id = startingPointS.next_right
            turnLeft.id = startingPointS.next_left
            console.log("Turned from east to south");
            break;
        case "turn-right-3":
            startingPoint.src = startingPointW.src
            startingPoint.alt = startingPointW.alt
            startingPoint.title = startingPointW.title
            element.id = startingPointW.next_right
            turnLeft.id = startingPointW.next_left
            console.log("Turned from south to west");
            break;
        case "turn-right-4":
            startingPoint.src = startingPointN.src
            startingPoint.alt = startingPointN.alt
            startingPoint.title = startingPointN.title
            element.id = startingPointN.next_right
            turnLeft.id = startingPointN.next_left
            console.log("Turned from west to north");
            break;
    }
}

window.cycleLeft = function(element) {
    switch (element.id) {
        case "turn-left-1":
            startingPoint.src = startingPointW.src
            startingPoint.alt = startingPointW.alt
            startingPoint.title = startingPointW.title
            element.id = startingPointW.next_left
            turnRight.id = startingPointW.next_right
            console.log("Turned from north to west");
            break;
        case "turn-left-2":
            startingPoint.src = startingPointS.src
            startingPoint.alt = startingPointS.alt
            startingPoint.title = startingPointS.title
            element.id = startingPointS.next_left
            turnRight.id = startingPointS.next_right
            console.log("Turned from west to south");
            break;
        case "turn-left-3":
            startingPoint.src = startingPointE.src
            startingPoint.alt = startingPointE.alt
            startingPoint.title = startingPointE.title
            element.id = startingPointE.next_left
            turnRight.id = startingPointE.next_right
            console.log("Turned from south to east");
            break;
        case "turn-left-4":
            startingPoint.src = startingPointN.src
            startingPoint.alt = startingPointN.alt
            startingPoint.title = startingPointN.title
            element.id = startingPointN.next_left
            turnRight.id = startingPointN.next_right
            console.log("Turned from east to north");
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
    console.log("Continued");
}

window.continue2 = function() {
    text2 = document.getElementById("text-2");
    text2.innerHTML = "You don't remember... anything.";
    text2.id = "text-3";
    continueButton2.hidden = true;
    console.log("Continued");
}


/**
 * Refresh button reloads page on click
 */
window.refreshPage = function() {
    window.location.reload();
}