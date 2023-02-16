function cycleLeft() {
    var startingPointImg = document.getElementById("starting-point-img");
    var lookLeftImg = document.getElementById("look-left-img");
    var lookRightImg = document.getElementById("look-right-img");
    startingPointImg.style.display = "none";
    lookLeftImg.style.display = "block";
    lookRightImg.style.display = "none";
}

function cycleRight() {
    var startingPointImg = document.getElementById("starting-point-img");
    var lookLeftImg = document.getElementById("look-left-img");
    var lookRightImg = document.getElementById("look-right-img");
    startingPointImg.style.display = "none";
    lookLeftImg.style.display = "none";
    lookRightImg.style.display = "block";
}