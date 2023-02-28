function cycleRight() {
    let startingPointN = document.getElementById("starting-point-n-img");
    let startingPointE = document.getElementById("starting-point-e-img");
    let startingPointS = document.getElementById("starting-point-s-img");
    let startingPointW = document.getElementById("starting-point-w-img");
    if (startingPointN.style.display === "block") {
        startingPointN.style.display = "none";
        startingPointE.style.display = "block";
    } else if (startingPointE.style.display === "block") {
        startingPointE.style.display = "none";
        startingPointS.style.display = "block";
    } else if (startingPointS.style.display === "block") {
        startingPointS.style.display = "none";
        startingPointW.style.display = "block";
    } else if (startingPointW.style.display === "block") {
        startingPointW.style.display = "none";
        startingPointN.style.display = "block";
    } else {
        startingPointW.style.display = "none";
        startingPointN.style.display = "block";
    }
}

function cycleLeft() {
    let startingPointN = document.getElementById("starting-point-n-img");
    let startingPointE = document.getElementById("starting-point-e-img");
    let startingPointS = document.getElementById("starting-point-s-img");
    let startingPointW = document.getElementById("starting-point-w-img");
    if (startingPointN.style.display === "block") {
        startingPointN.style.display = "none";
        startingPointW.style.display = "block";
    } else if (startingPointW.style.display === "block") {
        startingPointW.style.display = "none";
        startingPointS.style.display = "block";
    } else if (startingPointS.style.display === "block") {
        startingPointS.style.display = "none";
        startingPointE.style.display = "block";
    } else if (startingPointE.style.display === "block") {
        startingPointE.style.display = "none";
        startingPointN.style.display = "block";
    } else {
        startingPointW.style.display = "none";
        startingPointN.style.display = "block";
    }
}