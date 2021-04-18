// arc(x, y, w, h, start, stop, [mode], [detail])
// arc(50, 50, 80, 80, 0, PI + QUARTER_PI, OPEN);
// map() = function to take any number and scale it to a new number.
// let c = map(mouseX, 0, width,  0, 175);
// let d = map(mouseX, 0, width, 40, 300);
// let h = hour();
// text('Current hour:\n' + h, 5, 50);
// let m = minute();
// text('Current minute: \n' + m, 5, 50);
// let s = second();
// text('Current second: \n' + s, 5, 50);

var hr,mn,sc;
function preload() {
  bg=loadImage("bg.png")
}

function setup() {
  createCanvas(475,570);
  angleMode(DEGREES)
}

function draw() {
  background(bg);  

  textSize(35)
  textFont("cursive")
  textStyle(BOLD)
  fill("violet")
  text("*__The Clock__*",100,480)

  hr = hour();
  mn = minute();
  sc = second();

  translate(200,200)
  rotate (-90);

  strokeWeight(9)
  stroke("red")
  noFill()

  var scAngle = map(sc, 0, 60, 0, 360)
  arc(0,0,300,300,0,scAngle)
  
  stroke("chartreuse")
  var mnAngle = map(mn, 0, 60, 0, 360)
  arc(0,0,280,280,0,mnAngle)

  stroke("hotpink")
  var hrAngle = map(hr%12 ,-0 ,12 ,0 ,360)
  arc(0,0,260,260,0,hrAngle)

  push()
  rotate(scAngle)
  stroke("red")
  line(0,0,100,0)
  pop()

  push()
  rotate(mnAngle)
  stroke("chartreuse")
  line(0,0,100,0)
  pop()

  push()
  rotate(hrAngle)
  stroke("hotpink")
  line(0,0,100,0)
  pop()

  push();
  stroke("blue");
  point(0,0);
  pop();
}