let trail = [];
let stars = [];

let cometX;
let cometY;

function setup() {
  createCanvas(windowWidth, windowHeight);

  cometX = width / 2;
  cometY = height / 2;

  for (let i = 0; i < 120; i++) {
    stars.push({
      x: random(width),
      y: random(height),
      size: random(1, 3)
    });
  }
}

function draw() {
  background(8, 11, 33);

  noStroke();
  for (let star of stars) {
    fill(220, 225, 255, 170);
    circle(star.x, star.y, star.size);
  }

  cometX = lerp(cometX, mouseX, 0.12);
  cometY = lerp(cometY, mouseY, 0.12);

  trail.push({ x: cometX, y: cometY });

  if (trail.length > 65) {
    trail.shift();
  }

  for (let i = 0; i < trail.length; i++) {
    let p = trail[i];
    let amount = i / trail.length;

    let size = map(i, 0, trail.length, 2, 22);
    let alpha = map(i, 0, trail.length, 0, 150);

    noStroke();
    fill(145, 110, 255, alpha * 0.3);
    circle(p.x, p.y, size * 2.5);

    fill(255, 155, 235, alpha);
    circle(p.x, p.y, size);

    if (random(1) < 0.3) {
      fill(200, 190, 255, alpha);
      circle(
        p.x + random(-15, 15),
        p.y + random(-15, 15),
        random(1, 4)
      );
    }
  }

  noStroke();

  fill(140, 100, 255, 35);
  circle(cometX, cometY, 65);

  fill(200, 155, 255, 90);
  circle(cometX, cometY, 38);

  fill(255, 225, 255);
  circle(cometX, cometY, 14);

  fill(255);
  circle(cometX, cometY, 7);
}

function mousePressed() {
  stars = [];

  for (let i = 0; i < 120; i++) {
    stars.push({
      x: random(width),
      y: random(height),
      size: random(1, 3)
    });
  }
}

function keyPressed() {
  if (key === 's' || key === 'S') {
    saveCanvas('stardust', 'png');
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}