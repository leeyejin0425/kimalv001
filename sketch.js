let Inputbox;
let button;
let greeting;
let balls = [];

function setup() {
  createCanvas(710, 400);
  background(255);

  greeting = createElement('h2', 'How many balls do you want?');
  greeting.position(20, 20);

  Inputbox = createInput();
  Inputbox.position(20, 85);

  button = createButton('submit');
  button.position(Inputbox.x + Inputbox.width + 10, 85);

  button.mousePressed(createBalls);
}

function draw() {
  background(255);


  for (let ball of balls) {
    ball.move();
    ball.display();
  }
}

function createBalls() {
  balls = [];
  let numBalls = parseInt(Inputbox.value());

  if (isNaN(numBalls) || numBalls <= 0) {
    greeting.html('Please enter a valid number greater than 0.');
    return;
  }

  greeting.html(`Creating ${numBalls} balls!`);

  
  for (let i = 0; i < numBalls; i++) {
    let newBall = new Ball(
      random(width),
      random(height),
      random(10, 30),
      random(-2, 2),
      random(-2, 2)
    );
    balls.push(newBall);
  }
}


class Ball {
  constructor(x, y, radius, speedX, speedY) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.speedX = speedX;
    this.speedY = speedY;
  }

  move() {
    this.x += this.speedX;
    this.y += this.speedY;

  
    if (this.x < this.radius || this.x > width - this.radius) {
      this.speedX *= -1;
    }
    if (this.y < this.radius || this.y > height - this.radius) {
      this.speedY *= -1;
    }
  }

  display() {
    fill(100, 150, 200);
    noStroke();
    ellipse(this.x, this.y, this.radius * 2);
  }
}

