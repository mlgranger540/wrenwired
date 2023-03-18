import {storyImgs} from "./objects/scene2_objects.js";
import {addLogItemToStorage, clearSessionStorage, updateLogOnPage} from "./session_storage.js";

/**
 * Declare variables
 */
let viewportWidth;
let modal;
let log;
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
let text1;
let continueButton1;
let continueButton2;
let continueButton3;

/**
 * Assign variables on page load
 */
window.onload = (event) => {
    viewportWidth = window.innerWidth;
    modal = document.getElementById("modal");
    log = document.getElementsByClassName("panel")[0];
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
    text1 = document.getElementById("text-1");
    continueButton1 = document.getElementById("continue-1");
    continueButton2 = document.getElementById("continue-2");
    continueButton3 = document.getElementById("continue-3");
    updateLogOnPage();
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
            addLogItemToStorage(" turned from north to east.");
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
            addLogItemToStorage(" turned from east to south.");
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
            addLogItemToStorage(" turned from south to west.");
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
            addLogItemToStorage(" turned from west to north.");
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
            addLogItemToStorage(" turned from north to west.");
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
            addLogItemToStorage(" turned from west to south.");
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
            addLogItemToStorage(" turned from south to east.");
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
            addLogItemToStorage(" turned from east to north.");
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
    console.log("You found a way forward!");
    addLogItemToStorage(" moved onward to the west.");
    window.location.replace("page3_west_path.html");
}

window.moveChar2 = function() {
    console.log("You found a way forward!");
    addLogItemToStorage(" moved onward to the east.");
    window.location.replace("page3_east_path.html");
}


/**
 * Refresh button reloads game on click
 */
window.reloadGame = function() {
    clearSessionStorage();
    window.location.replace("index.html");
}