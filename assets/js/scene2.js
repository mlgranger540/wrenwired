import {storyImgs} from "./objects/scene2_objects.js";

/**
 * Declare variables
 */
let viewportWidth;
let modal;
let log;
let logList;
let storyFrame;
let footer;
let startingImg;
let northImg;
let eastImg;
let southImg;
let westImg;
let compass;
let river1;
let river2;
let path1;
let path2;
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
    startingImg = document.getElementById("starting-img");
    northImg = storyImgs.northImg;
    eastImg = storyImgs.eastImg;
    southImg = storyImgs.southImg;
    westImg = storyImgs.westImg;
    compass = document.getElementById("compass");
    river1 = document.getElementById("river-1");
    river2 = document.getElementById("river-2");
    path1 = document.getElementById("path-1");
    path2 = document.getElementById("path-2");
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
            startingImg.src = eastImg.src;
            startingImg.alt = eastImg.alt;
            startingImg.title = eastImg.title;
            compass.innerHTML = "<p>E</p>";
            river1.hidden = true;
            river2.hidden = true;
            path1.hidden = false;
            path2.hidden = false;
            element.id = eastImg.next_right;
            turnLeft.id = eastImg.next_left;
            console.log("Turn north to east");
            let logTurnNtoE = document.createElement("li");
            logTurnNtoE.innerHTML = "You turned from north to east.";
            logList.appendChild(logTurnNtoE);
            break;
        case "turn-right-2":
            startingImg.src = southImg.src;
            startingImg.alt = southImg.alt;
            startingImg.title = southImg.title;
            compass.innerHTML = "<p>S</p>";
            river1.hidden = true;
            river2.hidden = true;
            path1.hidden = true;
            path2.hidden = true;
            element.id = southImg.next_right;
            turnLeft.id = southImg.next_left;
            console.log("Turn east to south");
            let logTurnEtoS = document.createElement("li");
            logTurnEtoS.innerHTML = "You turned from east to south.";
            logList.appendChild(logTurnEtoS);
            break;
        case "turn-right-3":
            startingImg.src = westImg.src;
            startingImg.alt = westImg.alt;
            startingImg.title = westImg.title;
            compass.innerHTML = "<p>W</p>";
            river1.hidden = false;
            river2.hidden = false;
            path1.hidden = true;
            path2.hidden = true;
            element.id = westImg.next_right;
            turnLeft.id = westImg.next_left;
            console.log("Turn south to west");
            let logTurnStoW = document.createElement("li");
            logTurnStoW.innerHTML = "You turned from south to west.";
            logList.appendChild(logTurnStoW);
            break;
        case "turn-right-4":
            startingImg.src = northImg.src;
            startingImg.alt = northImg.alt;
            startingImg.title = northImg.title;
            compass.innerHTML = "<p>N</p>";
            river1.hidden = true;
            river2.hidden = true;
            path1.hidden = true;
            path2.hidden = true;
            element.id = northImg.next_right;
            turnLeft.id = northImg.next_left;
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
            startingImg.src = westImg.src;
            startingImg.alt = westImg.alt;
            startingImg.title = westImg.title;
            compass.innerHTML = "<p>W</p>";
            river1.hidden = false;
            river2.hidden = false;
            path1.hidden = true;
            path2.hidden = true;
            element.id = westImg.next_left;
            turnRight.id = westImg.next_right;
            console.log("Turn north to west");
            let logTurnNtoW = document.createElement("li");
            logTurnNtoW.innerHTML = "You turned from north to west.";
            logList.appendChild(logTurnNtoW);
            break;
        case "turn-left-2":
            startingImg.src = southImg.src;
            startingImg.alt = southImg.alt;
            startingImg.title = southImg.title;
            compass.innerHTML = "<p>S</p>";
            river1.hidden = true;
            river2.hidden = true;
            path1.hidden = true;
            path2.hidden = true;
            element.id = southImg.next_left;
            turnRight.id = southImg.next_right;
            console.log("Turn west to south");
            let logTurnWtoS = document.createElement("li");
            logTurnWtoS.innerHTML = "You turned from west to south.";
            logList.appendChild(logTurnWtoS);
            break;
        case "turn-left-3":
            startingImg.src = eastImg.src;
            startingImg.alt = eastImg.alt;
            startingImg.title = eastImg.title;
            compass.innerHTML = "<p>E</p>";
            river1.hidden = true;
            river2.hidden = true;
            path1.hidden = false;
            path2.hidden = false;
            element.id = eastImg.next_left;
            turnRight.id = eastImg.next_right;
            console.log("Turn south to east");
            let logTurnStoE = document.createElement("li");
            logTurnStoE.innerHTML = "You turned from south to east.";
            logList.appendChild(logTurnStoE);
            break;
        case "turn-left-4":
            startingImg.src = northImg.src;
            startingImg.alt = northImg.alt;
            startingImg.title = northImg.title;
            compass.innerHTML = "<p>N</p>";
            river1.hidden = true;
            river2.hidden = true;
            path1.hidden = true;
            path2.hidden = true;
            element.id = northImg.next_left;
            turnRight.id = northImg.next_right;
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
 * Click areas
 * Invisible buttons to progress to the next scene
 */
window.moveChar1 = function() {
    console.log("You found the way forward!");
    let logMoveChar1 = document.createElement("li");
    logMoveChar1.innerHTML = "You moved onward to the west.";
    logList.appendChild(logMoveChar1);
    window.location.replace("page3_west_path.html");
}

window.moveChar2 = function() {
    console.log("You found the way forward!");
    let logMoveChar2 = document.createElement("li");
    logMoveChar2.innerHTML = "You moved onward to the east.";
    logList.appendChild(logMoveChar2);
    window.location.replace("page3_east_path.html");
}


/**
 * Refresh button reloads game on click
 */
window.refreshPage = function() {
    window.location.replace("index.html");
}