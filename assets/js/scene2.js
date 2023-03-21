import {storyImgs} from "./objects/scene2_objects.js";
import {addLogItemToStorage, clearSessionStorage, updateLogOnPage} from "./session_storage.js";

/**
 * Declare variables
 */
let viewportWidth;
let log;
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
let textbox;
let text1;
let continueButton1;
let closeTextbox;

/**
 * Assign variables on page load
 */
window.onload = (event) => {
    viewportWidth = window.innerWidth;
    log = document.getElementsByClassName("panel")[0];
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
    textbox = document.getElementById("text-box");
    text1 = document.getElementById("text-1");
    continueButton1 = document.getElementById("continue-1");
    closeTextbox = document.getElementById("close-textbox");
    updateLogOnPage();
};


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
        } else if (viewportWidth < 769) {
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
 * Call details from story image objects depending on current element ID, then update both button IDs
 * Add turn details to session storage to update log
 */
window.cycleRight = function(element) {
    switch (element.id) {
        case "turn-right-1":
            startingImg.src = eastImg.src;
            startingImg.alt = eastImg.alt;
            startingImg.title = eastImg.title;
            compass.innerHTML = "<p>E</p>";
            textbox.hidden = false;
            closeTextbox.hidden = false;
            text1.innerHTML = eastImg.text;
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
            textbox.hidden = false;
            closeTextbox.hidden = false;
            text1.innerHTML = southImg.text;
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
            textbox.hidden = false;
            closeTextbox.hidden = false;
            text1.innerHTML = westImg.text;
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
            textbox.hidden = false;
            closeTextbox.hidden = false;
            text1.innerHTML = northImg.text;
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
            textbox.hidden = false;
            closeTextbox.hidden = false;
            text1.innerHTML = westImg.text;
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
            textbox.hidden = false;
            closeTextbox.hidden = false;
            text1.innerHTML = southImg.text;
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
            textbox.hidden = false;
            closeTextbox.hidden = false;
            text1.innerHTML = eastImg.text;
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
            textbox.hidden = false;
            closeTextbox.hidden = false;
            text1.innerHTML = northImg.text;
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
    text1.innerHTML = "The trees are thick ahead of you. You don't see a clear way through.";
    turnLeft.style.color = "#D5D5D5";
    turnRight.style.color = "#D5D5D5";
    turnLeft.disabled = false;
    turnRight.disabled = false;
    continueButton1.hidden = true;
    closeTextbox.hidden = false;
}

window.closeTextbox = function() {
    textbox.hidden = true;
    closeTextbox.hidden = true;
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