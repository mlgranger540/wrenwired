/**
 * Declare variables
 */ 
let startingPointN;
let startingPointE;
let startingPointS;
let startingPointW;
let continueButton1;
let continueButton2;
let text1;
let text2;

/**
 * Assign variables on page load
 */
window.onload = (event) =>{
    startingPointN = document.getElementById("starting-point-n-img");
    startingPointE = document.getElementById("starting-point-e-img");
    startingPointS = document.getElementById("starting-point-s-img");
    startingPointW = document.getElementById("starting-point-w-img");
    continueButton1 = document.getElementById("continue-1");
    continueButton2 = document.getElementById("continue-2");
    text1 = document.getElementById("text-1");
};


/**
 * Turn button functions
 * Checks images for a display value of "block" and, if found, changes that image's display to "none" and the next image's display to "block"
 */
function cycleRight() {
    const compStylesN = window.getComputedStyle(startingPointN);
    const compStylesE = window.getComputedStyle(startingPointE);
    const compStylesS = window.getComputedStyle(startingPointS);
    if (compStylesN.getPropertyValue("display") === "block") {
        startingPointN.style.display = "none";
        startingPointE.style.display = "block";
        console.log("Turned from north to east");
    } else if (compStylesE.getPropertyValue("display") === "block") {
        startingPointE.style.display = "none";
        startingPointS.style.display = "block";
        console.log("Turned from east to south");
    } else if (compStylesS.getPropertyValue("display") === "block") {
        startingPointS.style.display = "none";
        startingPointW.style.display = "block";
        console.log("Turned from south to west");
    } else {
        startingPointW.style.display = "none";
        startingPointN.style.display = "block";
        console.log("Turned from west to north");
    }
}

function cycleLeft() {
    const compStylesN = window.getComputedStyle(startingPointN);
    const compStylesW = window.getComputedStyle(startingPointW);
    const compStylesS = window.getComputedStyle(startingPointS);
    if (compStylesN.getPropertyValue("display") === "block") {
        startingPointN.style.display = "none";
        startingPointW.style.display = "block";
        console.log("Turned from north to west");
    } else if (compStylesW.getPropertyValue("display") === "block") {
        startingPointW.style.display = "none";
        startingPointS.style.display = "block";
        console.log("Turned from west to south");
    } else if (compStylesS.getPropertyValue("display") === "block") {
        startingPointS.style.display = "none";
        startingPointE.style.display = "block";
        console.log("Turned from south to east");
    } else {
        startingPointE.style.display = "none";
        startingPointN.style.display = "block";
        console.log("Turned from east to north");
    }
}


/**
 * Continue button functions
 * Changes text of p element in textbox on click, updates the element's ID number, then hides continueButtonN and displays continueButtonN+1
 */
function continue1() {
    text1.innerHTML = "You are in the middle of an empty field. You don't remember how you got there.";
    text1.id = "text-2";
    continueButton1.className = "continue hidden";
    continueButton2.className = "continue shown";
}

function continue2() {
    text2 = document.getElementById("text-2");
    text2.innerHTML = "You don't remember... anything.";
    text2.id = "text-3";
    continueButton2.className = "continue hidden";
}


/**
 * Refresh button reloads page on click
 */

function refreshPage() {
    window.location.reload();
}