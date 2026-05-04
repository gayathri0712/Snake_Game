const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const grid = 20;

let snake;
let dx;
let dy;
let food;
let score;
let gameRunning = false;
let gameSpeed = 120;

let highScore = localStorage.getItem("highScore") || 0;
document.getElementById("highScore").innerText = highScore;

let eatSound;
let gameOverSound;

document.addEventListener("keydown", changeDirection);

function loadSounds() {
  eatSound = new Audio("https://www.soundjay.com/buttons/sounds/button-09.mp3");
  gameOverSound = new Audio("https://www.soundjay.com/misc/sounds/fail-buzzer-02.mp3");
}

function initGame() {
  snake = [{ x: 200, y: 200 }];
  dx = grid;
  dy = 0;

  food = {
    x: Math.floor(Math.random() * 20) * grid,
    y: Math.floor(Math.random() * 20) * grid,
  };

  score = 0;
  gameSpeed = document.getElementById("difficulty").value;
  document.getElementById("score").innerText = score;
}

function startGame() {
  loadSounds();
  if (!gameRunning) {
    gameRunning = true;
    gameLoop();
  }
}

function restartGame() {
  gameRunning = false;
  initGame();
  drawGame();
}

function changeDirection(event) {
  if (event.key === "ArrowUp") setDirection("up");
  if (event.key === "ArrowDown") setDirection("down");
  if (event.key === "ArrowLeft") setDirection("left");
  if (event.key === "ArrowRight") setDirection("right");
}

function setDirection(dir) {
  if (dir === "up" && dy === 0) { dx = 0; dy = -grid; }
  if (dir === "down" && dy === 0) { dx = 0; dy = grid; }
  if (dir === "left" && dx === 0) { dx = -grid; dy = 0; }
  if (dir === "right" && dx === 0) { dx = grid; dy = 0; }
}

function gameLoop() {
  if (!gameRunning) return;

  setTimeout(function () {
    moveSnake();
    drawGame();
    checkCollision();
    gameLoop();
  }, gameSpeed);
}

function drawGame() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, 400, 400);

  ctx.fillStyle = "lime";
  snake.forEach(part => ctx.fillRect(part.x, part.y, grid, grid));

  ctx.fillStyle = "red";
  ctx.fillRect(food.x, food.y, grid, grid);
}

function moveSnake() {
  let head = { x: snake[0].x + dx, y: snake[0].y + dy };
  snake.unshift(head);

  if (head.x === food.x && head.y === food.y) {
    score++;
    document.getElementById("score").innerText = score;
    eatSound.currentTime = 0;
    eatSound.play();

    if (score % 5 === 0) { gameSpeed -= 10; }

    food = {
      x: Math.floor(Math.random() * 20) * grid,
      y: Math.floor(Math.random() * 20) * grid
    };
  } else {
    snake.pop();
  }
}

function checkCollision() {
    let head = snake[0];
    if (head.x < 0 || head.x >= 400 || head.y < 0 || head.y >= 400) {
    gameRunning = false;
    gameOverSound.currentTime = 0;
    gameOverSound.play();

    if (score > highScore) {
        highScore = score;
        localStorage.setItem("highScore", highScore);
        document.getElementById("highScore").innerText = highScore;
    }

    alert("Game Over!\nYour Score: " + score + "\nHighest Score: " + highScore);
    }
}

initGame();
drawGame();