let ground;
let lander;
var lander_img;
var bg_img;
var landBase

var vy = 0;
var vx = 0
var g = 0.05;

function preload() {
  lander_img = loadImage("normal.png");
  bg_img = loadImage("bg.png");

}

function setup() {
  createCanvas(1000, 700);
  frameRate(80);

  lander = createSprite(100, 50, 30, 30);
  lander.addImage(lander_img);
  lander.scale = 0.1;
  lander.setCollider("rectangle", 0, 0, 200, 200)

  landBase = createSprite(910, 240, 90, 10)

  rectMode(CENTER);
  textSize(15);
}

function draw() {
  background(51);
  image(bg_img, 0, 0);
  push()
  fill(255);
  text("Vertical Velocity: " + round(vy), 800, 75)
  pop();

  //fall down
  vy += g;
  lander.position.y += vy;
  lander.position.x += vx

  land()

  drawSprites();
}

function keyPressed() {
  if (keyCode == LEFT_ARROW) {
    lander.position.x -= 10
  }

  if (keyCode == RIGHT_ARROW) {
    lander.position.x += 10
  }

  if (keyCode == UP_ARROW) {
    upward_thrust()
  }
}

function upward_thrust() {
  vy = -1
}

function land() {
  if(lander.isTouching(landBase)) {
    vy = 0
    vx = 0
    g = 0
    
  }
}