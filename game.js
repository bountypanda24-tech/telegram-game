const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 400;
canvas.height = 400;

let x = 200;
let y = 200;
let dx = 2;
let dy = 2;
let radius = 20;

function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fillStyle = "gold";
  ctx.fill();
  ctx.closePath();
}

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();

  x += dx;
  y += dy;

  if (x + radius > canvas.width || x - radius < 0) dx = -dx;
  if (y + radius > canvas.height || y - radius < 0) dy = -dy;

  requestAnimationFrame(update);
}

update();
