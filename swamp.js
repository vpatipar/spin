function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  background(random(256), random(256), random(256));
  noStroke();
  detailX = createSlider(2, 30, 12);
  detailX.position(40, height + 30);
  detailX.style('width', '2050px');
  detailY = createSlider(2, 400, 12);
  detailY.position(40, height + 10);
  detailY.style('width', '2050px')
}

 let value = 0;
function draw() {
  let locX = mouseX - width / 2;
  let locY = mouseY - height / 2;
  pointLight(500, 500, 500, locX, locY, 200);
  fill(value);
  rotateY(millis() / 600);
  rotateY(millis() / 500);
  sphere(detailY.value(), detailX.value(), 60);
}

function mousePressed() {
  if (value === 0) {
    value = 90;
  } else {
    value = 0;
  }
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    value = 255;
  } else if (keyCode === RIGHT_ARROW) {
    value = 0;
  }

}



