var btn_red;
var btn_green;

var r = 0;
var g = 0;
var b = 0;

function setup() {
  createCanvas(400, 400);  
btn_red = createButton("RED");
btn_red.position(100,50);
btn_red.mousePressed(Red);

btn_green = createButton("GREEN");
btn_green.position(2500,50);
btn_green.mousePressed(Green);

function draw(){
 background(200,10,200);   
}
function Red(){
  r = 255;
  g = 0;
  b = 0;
}
function Green(){
  r = 0;
  g = 255;
  b = 0; 
}
