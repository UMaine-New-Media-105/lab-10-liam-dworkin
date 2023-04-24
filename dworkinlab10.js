//Liam Dworkin
//Lab 9
//NMD 105

//Frogger style game

//defining variables used
//car arrays and then canvas width and height for boundary purposes

let canvasW = 500;
let canvasH = 400;
let frogger;
let cars1 = [];
let cars2 = [];
let cars3 = [];

function setup() {
  createCanvas(500, 400);

  //defining the new elements of each class option with an array of sorts
  //can't figure out how to get the other car to reverse right now
  /* working on collision still- especially in my A5C5, so when I figure that out better I may return here. */

  frogger = new Frogger(width / 2, height - 30, 35);
  cars1 = new Car1(0, 77, 1, 100, 40, "red");
  cars2 = new Car1(0, 270, 1, 70, 30, "purple");
  cars3 = new Car3(0, 150, 1, 60, 40, "orange");
}

function draw() {
  /*background and 'roads' just coded in physically in draw. There's two little roads with full yellow bars and then on the far side there's a little lake or stream with a 'mucky' green swampy part.*/

  //pretty simple design
  //jsut wanted it to resemble frogger and that's about it

  background("gray");

  noStroke();
  fill("yellow");
  rect(0, 330, 500, 10);
  fill("black");
  rect(0, 200, 500, 50);
  fill("yellow");
  rect(0, 125, 500, 10);
  fill("green");
  rect(0, 0, 500, 60);
  fill("blue");
  rect(0, 0, 500, 50);

  frogger.show();
  frogger.update();

  cars1.show();
  cars1.update();

  cars2.show();
  cars2.update();

  cars3.show();
  cars3.update();
}

class Frogger {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
  }

  show() {
    fill("green");
    ellipse(this.x, this.y, this.size * 1.5, this.size);
  }

  //keyIsDown movement, I know it's somewhat cheating as it's easier to move
  //But! It's also easier to code in and that's what I chose

  update() {
    if (keyIsDown(LEFT_ARROW)) {
      this.x -= 3;
    } else if (keyIsDown(RIGHT_ARROW)) {
      this.x += 3;
    } else if (keyIsDown(UP_ARROW)) {
      this.y -= 3;
    } else if (keyIsDown(DOWN_ARROW)) {
      this.y += 3;
    }
  }
}

//car class- only need one for both due to array usage

class Car1 {
  constructor(x, y, speed, width, height, color) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.width = width;
    this.height = height;
    this.color = color;
  }

  show() {
    fill(this.color);
    rect(this.x, this.y, this.width, this.height);
  }

  update() {
    this.x += this.speed;
    if (this.x > canvasW + this.width / 2) {
      this.x = -this.width / 2;
    }
  }
}

//attempt to make another car the other way
//it did not work
//apprently I'm not very good at +/- math equivalents

class Car3 {
  constructor(x, y, speed, width, height, color) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.width = width;
    this.height = height;
    this.color = color;
  }

  show() {
    fill(this.color);
    rect(this.x, this.y, this.width, this.height);
  }

  update() {
    this.x -= this.speed;
    if (this.x > canvasW + this.width / 2) {
      this.x = -this.width / 2;
    }
  }
}
