let startingPointN;
let startingPointE;
let startingPointS;
let startingPointW;

window.onload = (event) =>{
    startingPointN = document.getElementById("starting-point-n-img");
    console.log("Loaded starting point N: " + startingPointN);
    startingPointE = document.getElementById("starting-point-e-img");
    console.log("Loaded starting point E: " + startingPointE);
    startingPointS = document.getElementById("starting-point-s-img");
    console.log("Loaded starting point S: " + startingPointS);
    startingPointW = document.getElementById("starting-point-w-img");
    console.log("Loaded starting point W: " + startingPointW);
}

function cycleRight() {
    const compStylesN = window.getComputedStyle(startingPointN);
    const compStylesE = window.getComputedStyle(startingPointE);
    const compStylesS = window.getComputedStyle(startingPointS);
    if (compStylesN.getPropertyValue('display') === "block") {
        startingPointN.style.display = "none";
        startingPointE.style.display = "block";
        console.log("Turned from north to east");
    } else if (compStylesE.getPropertyValue('display') === "block") {
        startingPointE.style.display = "none";
        startingPointS.style.display = "block";
        console.log("Turned from east to south");
    } else if (compStylesS.getPropertyValue('display') === "block") {
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
    if (compStylesN.getPropertyValue('display') === "block") {
        startingPointN.style.display = "none";
        startingPointW.style.display = "block";
        console.log("Turned from north to west");
    } else if (compStylesW.getPropertyValue('display') === "block") {
        startingPointW.style.display = "none";
        startingPointS.style.display = "block";
        console.log("Turned from west to south");
    } else if (compStylesS.getPropertyValue('display') === "block") {
        startingPointS.style.display = "none";
        startingPointE.style.display = "block";
        console.log("Turned from south to east");
    } else {
        startingPointE.style.display = "none";
        startingPointN.style.display = "block";
        console.log("Turned from east to north");
    }
}