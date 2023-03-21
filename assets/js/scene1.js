import {storyImgs} from "./objects/scene1_objects.js";
import {addLogItemToStorage, addNameToStorage, clearSessionStorage, updateLogOnPage} from "./session_storage.js";

/**
 * Declare variables
 */
let viewportWidth;
let instructionsModal;
let log;
let storyFrame;
let footer;
let startingImg;
let northImg;
let eastImg;
let southImg;
let westImg;
let compass;
let treeLine;
let turnLeft;
let turnRight;
let textbox;
let text1;
let continueButton1;
let continueButton2;
let continueButton3;
let continueButton4;
let continueButton5;
let closeTextbox;
let nameModal;
let nameInput;

/**
 * Assign variables on page load
 */
window.onload = (event) => {
    viewportWidth = window.innerWidth;
    instructionsModal = document.getElementById("instructions-modal");
    log = document.getElementsByClassName("panel")[0];
    storyFrame = document.getElementById("story-frame-1");
    footer = document.getElementsByTagName("footer")[0];
    startingImg = document.getElementById("starting-img");
    northImg = storyImgs.northImg;
    eastImg = storyImgs.eastImg;
    southImg = storyImgs.southImg;
    westImg = storyImgs.westImg;
    compass = document.getElementById("compass");
    treeLine = document.getElementById("tree-line");
    turnLeft = document.getElementsByName("turn-left")[0];
    turnRight = document.getElementsByName("turn-right")[0];
    textbox = document.getElementById("text-box");
    text1 = document.getElementById("text-1");
    continueButton1 = document.getElementById("continue-1");
    continueButton2 = document.getElementById("continue-2");
    continueButton3 = document.getElementById("continue-3");
    continueButton4 = document.getElementById("continue-4");
    continueButton5 = document.getElementById("continue-5");
    closeTextbox = document.getElementById("close-textbox");
    nameModal = document.getElementById("name-modal");
    nameInput = document.getElementById("name-input");
    clearSessionStorage();
    updateLogOnPage();
};


/**
 * Modal play button
 */
window.play = function() {
    storyFrame.hidden = false;
    footer.hidden = false;
    instructionsModal.hidden = true;
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
            treeLine.hidden = true;
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
            treeLine.hidden = true;
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
            treeLine.hidden = true;
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
            treeLine.hidden = false;
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
            treeLine.hidden = true;
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
            treeLine.hidden = true;
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
            treeLine.hidden = true;
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
            treeLine.hidden = false;
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
    text3.innerHTML = "Actually... after a second, you do remember one thing. Your name.";
    text3.id = "text-4";
    continueButton3.hidden = true;
    continueButton4.hidden = false;
}

window.continue4 = function() {
    continueButton4.hidden = true;
    nameModal.hidden = false;
}

window.continue5 = function() {
    let text5 = document.getElementById("text-5");
    text5.innerHTML = "With no idea what else to do, you start looking for something, anything, to move towards.";
    turnLeft.style.color = "#D5D5D5";
    turnRight.style.color = "#D5D5D5";
    turnLeft.disabled = false;
    turnRight.disabled = false;
    treeLine.disabled = false;
    continueButton5.hidden = true;
    closeTextbox.hidden = false;
}

/**
 * Name input checked against regular expression to ensure only valid names are submitted
 * If invalid, a custom validity error message shown to user
 */

window.submitName = function() {
    const regex = new RegExp(/^[a-zA-Z ]+$/,'gi');
    let name = nameInput.value;
    console.log(name);
    let regexTest = regex.test(name);
    console.log(regexTest);
    if (name === "") {
        nameInput.setCustomValidity("Please submit a name");
        console.log("Please submit a name");
    } else if (regexTest) {
        console.log("Passed");
        console.log(`Hello ${name}`);
        addNameToStorage(name);
        addLogItemToStorage(" remembered their name.");
        nameModal.hidden = true;
        continueButton5.hidden = false;
        let text4 = document.getElementById("text-4");
        text4.innerHTML = `${name}. Your name is ${name}.`;
        text4.id = "text-5";
    } else {
        console.log("Failed");
        nameInput.setCustomValidity("Your name may only contain the characters a-z");
        nameInput.reportValidity();
        nameInput.value = "";
        console.log("Please submit a name");
    }
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
    console.log("You found the way forward!");
    addLogItemToStorage(" moved onward to the north.");
    window.location.replace("page2.html");
}


/**
 * Start over button reloads game on click
 */
window.reloadGame = function() {
    clearSessionStorage();
    window.location.replace("index.html");
}