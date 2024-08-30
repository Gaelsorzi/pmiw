//Gael sorzini
//https://youtu.be/AyMgPXJobkg
function preload() {
 obra = loadImage("data/obra.jpg");}
function setup() {
 createCanvas(800, 400);
}

function draw() {
  background(255);
  tam = width / columnas;
  image(obra, 0, 0, 400, 400);
  copiaObra();
}

function keyPressed() {
  columnas = 8;
}

function mousePressed() {
  columnas++;
}
