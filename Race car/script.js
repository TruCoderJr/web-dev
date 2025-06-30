const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 360;
canvas.height = 600;

// Game variables
let playerCar = { x: 160, y: 500, width: 40, height: 80, color: "red" };
let enemyCars = [];
let speed = 2;
let gameRunning = true;

// Key handling
let keys = {
  ArrowLeft: false,
  ArrowRight: false
};

document.addEventListener("keydown", (e) => (keys[e.key] = true));
document.addEventListener("keyup", (e) => (keys[e.key] = false));

// Helper functions
function drawCar(car) {
  ctx.fillStyle = car.color;
  ctx.fillRect(car.x, car.y, car.width, car.height);
}

function createEnemyCar() {
  const xPos = Math.random() * (canvas.width - 40);
  const enemyCar = { x: xPos, y: -80, width: 40, height: 80, color: "blue" };
  enemyCars.push(enemyCar);
}

function moveCars() {
  // Move player car
  if (keys.ArrowLeft && playerCar.x > 0) playerCar.x -= 5;
  if (keys.ArrowRight && playerCar.x < canvas.width - playerCar.width) playerCar.x += 5;

  // Move enemy cars
  for (let i = 0; i < enemyCars.length; i++) {
    enemyCars[i].y += speed;

    // Remove off-screen enemy cars
    if (enemyCars[i].y > canvas.height) {
      enemyCars.splice(i, 1);
      i--;
    }

    // Check for collision
    if (
      playerCar.x < enemyCars[i].x + enemyCars[i].width &&
      playerCar.x + playerCar.width > enemyCars[i].x &&
      playerCar.y < enemyCars[i].y + enemyCars[i].height &&
      playerCar.y + playerCar.height > enemyCars[i].y
    ) {
      gameRunning = false;
      alert("Game Over!");
      document.location.reload();
    }
  }
}

function gameLoop() {
  if (!gameRunning) return;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw road
  ctx.fillStyle = "gray";
  ctx.fillRect(80, 0, 200, canvas.height);

  // Draw lines on the road
  ctx.fillStyle = "white";
  for (let i = 0; i < canvas.height / 40; i++) {
    ctx.fillRect(175, i * 60, 10, 30);
  }

  // Draw player car
  drawCar(playerCar);

  // Draw enemy cars
  enemyCars.forEach(drawCar);

  moveCars();

  // Add new enemy cars at intervals
  if (Math.random() < 0.03) {
    createEnemyCar();
  }

  requestAnimationFrame(gameLoop);
}

// Start game
gameLoop();
