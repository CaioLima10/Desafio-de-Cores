const bigCircle = document.getElementById("circle");
const elipseBlue = document.getElementById("elipse-blue");
const elipseRed = document.getElementById("elipse-red");
const elipseGreen = document.getElementById("elipse-green");
const elipseCyan = document.getElementById("elipse-cyan");
const elipsePink = document.getElementById("elipse-pink");


function bordersReset() {
  elipseBlue.style.border = "none";
  elipseRed.style.border = "none";
  elipseGreen.style.border = "none";
  elipseCyan.style.border = "none";
  elipsePink.style.border = "none";
}

function initialColor() {
  bigCircle.style.backgroundColor = "#D9D9D9";
  bordersReset();
}

function selectedCircle(id) {
  bordersReset();

  if(id === 'blue') elipseBlue.style.border = "4px solid black";
  if(id === 'red') elipseRed.style.border = "4px solid black";
  if(id === 'green') elipseGreen.style.border = "4px solid black";
  if(id === 'cyan') elipseCyan.style.border = "4px solid black";
  if(id === 'pink') elipsePink.style.border = "4px solid black";
}

function colorBigCircle(color) {
  bigCircle.style.backgroundColor = color;
  bigCircle.style.border = "2px solid black"; 
}     