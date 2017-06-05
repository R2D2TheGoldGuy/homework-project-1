// Vanilla JavaScript version

var clickEvent = document.getElementById("button").addEventListener("click", changeColor);
var randomHexColor = '#' + (Math.random() * 0xffffff<<0).toString(16);

function changeColor() {
    /* Example: Static value when clicked
    var hexValue = document.getElementById("background-color").style.backgroundColor = '#ffa144';
    */    
    // Goal: Generate a different color when clicked
    var hexValue = document.getElementById("background-color").style.backgroundColor = randomHexColor;
}

