var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.getElementById("random");

function setGradient() {
    body.style.background = "linear-gradient(to right, " 
    + color1.value 
    + ", "
    + color2.value 
    + ")";

    css.textContent = body.style.background + ";";

}

function currentGradient() {
    body.style.background = "linear-gradient(to right, "
    + color1 
    +", "
    + color2 
    +")";
    
    css.textContent = body.style.background + ";";
}

function randomColor1() {
    var randomNum1 = Math.floor(Math.random() * 256);
    var randomNum2 = Math.floor(Math.random() * 256);
    var randomNum3 = Math.floor(Math.random() * 256);

    body.style.background = "rgb(" 
    + randomNum1 + ", " 
    + randomNum2 + ", " 
    + randomNum3 + ")";

    css.textContent = body.style.background + ";";
}

random.addEventListener("click", randomColor1);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);
