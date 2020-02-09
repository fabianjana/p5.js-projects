function setup() {
  createCanvas(700, 700);
  fractions = 0;
}

function draw() {
  background(0);
  strokeWeight(2);
  stroke(255, 255, 255);

  noFill();
  beginShape();
  vertex(50, 350);
  fractal(50, 350, 650, 350, 0);
  vertex(650, 350);
  endShape();
  
  noStroke();
  fill(255);
  textFont('Impact');
  textSize(20);
  text("Press Left or Right", 5, 25);  
  text("FRACTIONS = " + fractions, 5, 50);
}

function fractal(x0, y0, x9, y9, iteration) {
  if (iteration == fractions) return;
  iteration++;
  var lengthX = (x9 - x0) / 4;
  var lengthY = (y9 - y0) / 4;

  var x1 = x0 + lengthX;
  var y1 = y0 + lengthY;
  fractal(x0, y0, x1, y1, iteration);

  vertex(x1, y1);
  var x2 = x1 + lengthY;
  var y2 = y1 - lengthX;
  fractal(x1, y1, x2, y2, iteration);

  vertex(x2, y2);
  var x3 = x2 + lengthX;
  var y3 = y2 + lengthY;
  fractal(x2, y2, x3, y3, iteration);

  vertex(x3, y3);
  var x4 = x3 - lengthY;
  var y4 = y3 + lengthX;
  fractal(x3, y3, x4, y4, iteration);

  vertex(x4, y4);
  var x5 = x4 - lengthY;
  var y5 = y4 + lengthX;
  fractal(x4, y4, x5, y5, iteration);

  vertex(x5, y5);
  var x6 = x5 + lengthX;
  var y6 = y5 + lengthY;
  fractal(x5, y5, x6, y6, iteration);

  vertex(x6, y6);
  var x7 = x6 + lengthY;
  var y7 = y6 - lengthX;
  fractal(x6, y6, x7, y7, iteration);

  vertex(x7, y7);
  var x8 = x7 + lengthX;
  var y8 = y7 + lengthY;
  fractal(x7, y7, x8, y8, iteration);
}

function keyPressed() {
  if (keyCode === LEFT_ARROW && fractions > 0) {
    print(fractions);
    fractions--;
  } else if (keyCode === RIGHT_ARROW && fractions < 4) {
    print(fractions);
    fractions++;
  }
  return false;
}