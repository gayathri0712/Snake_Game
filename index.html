
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const grid = 20;
const cells = canvas.width / grid;

let snake, food, score;
let dx = grid, dy = 0;
let nextDx = grid, nextDy = 0;
let gameRunning = false;
let gameOver = false;
let timer = null;
let soundOn = true;

let highScore = Number(localStorage.getItem("highScore")) || 0;

const scoreEl = document.getElementById("score");
const highScoreEl = document.getElementById("highScore");
const overlay = document.getElementById("overlay");
const message = document.getElementById("message");
const messageText = document.getElementById("messageText");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");

highScoreEl.textContent = highScore;

function showMessage(title, text) {
  message.textContent = title;
  messageText.textContent = text;
  overlay.classList.remove("hidden");
}

function hideMessage() {
  overlay.classList.add("hidden");
}

function playSound(frequency) {
  if (!soundOn) return;

  try {
    const audio = new (window.AudioContext ||
      window.webkitAudioContext)();

    const oscillator = audio.createOscillator();
    const gain = audio.createGain();

    oscillator.frequency.value = frequency;
    gain.gain.value = 0.06;

    oscillator.connect(gain);
    gain.connect(audio.destination);

    oscillator.start();
    oscillator.stop(audio.currentTime + 0.1);
    oscillator.onended = () => audio.close();
  } catch (error) {
    // The game still works if audio is unavailable.
  }
}

function placeFood() {
  const emptyCells = [];

  for (let x = 0; x < cells; x++) {
    for (let y = 0; y < cells; y++) {
      const occupied = snake.some(
        part => part.x === x * grid && part.y === y * grid
      );

      if (!occupied) {
        emptyCells.push({ x: x * grid, y: y * grid });
      }
    }
  }

  if (emptyCells.length === 0) {
    gameRunning = false;
    gameOver = true;
    clearTimeout(timer);
    pauseBtn.disabled = true;
    startBtn.disabled = true;
    showMessage("🏆 You Win!", "You filled the entire board!");
    return;
  }

  food = emptyCells[Math.floor(Math.random() * emptyCells.length)];
}

function initGame() {
  clearTimeout(timer);

  snake = [
    { x: 200, y: 200 },
    { x: 180, y: 200 },
    { x: 160, y: 200 }
  ];

  dx = grid;
  dy = 0;
  nextDx = grid;
  nextDy = 0;
  score = 0;

  gameRunning = false;
  gameOver = false;

  scoreEl.textContent = score;
  startBtn.disabled = false;
  startBtn.textContent = "▶ Start";
  pauseBtn.disabled = true;
  pauseBtn.textContent = "⏸ Pause";

  placeFood();
  drawGame();
}

function startGame() {
  if (gameOver) initGame();

  if (gameRunning) return;

  gameRunning = true;
  startBtn.textContent = "▶ Running";
  pauseBtn.disabled = false;
  hideMessage();
  gameLoop();
}

function pauseGame() {
  if (gameOver) return;

  if (gameRunning) {
    gameRunning = false;
    clearTimeout(timer);
    pauseBtn.textContent = "▶ Resume";
    startBtn.textContent = "▶ Start";
    showMessage("⏸ Paused", "Press Resume to continue.");
  } else {
    startGame();
  }
}

function restartGame() {
  initGame();
  startGame();
}

function setDirection(direction) {
  if (direction === "up" && dy === 0) {
    nextDx = 0;
    nextDy = -grid;
  } else if (direction === "down" && dy === 0) {
    nextDx = 0;
    nextDy = grid;
  } else if (direction === "left" && dx === 0) {
    nextDx = -grid;
    nextDy = 0;
  } else if (direction === "right" && dx === 0) {
    nextDx = grid;
    nextDy = 0;
  }
}

document.addEventListener("keydown", event => {
  const keys = [
    "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", " "
  ];

  if (keys.includes(event.key)) event.preventDefault();

  if (event.key === " ") {
    if (gameRunning) pauseGame();
    else startGame();
    return;
  }

  const directions = {
    ArrowUp: "up",
    ArrowDown: "down",
    ArrowLeft: "left",
    ArrowRight: "right"
  };

  if (directions[event.key]) {
    setDirection(directions[event.key]);
  }
});

document.querySelectorAll("[data-dir]").forEach(button => {
  button.addEventListener("click", () => {
    setDirection(button.dataset.dir);
  });
});

startBtn.addEventListener("click", startGame);
pauseBtn.addEventListener("click", pauseGame);
document.getElementById("restartBtn").addEventListener("click", restartGame);

document.getElementById("soundBtn").addEventListener("click", event => {
  soundOn = !soundOn;
  event.currentTarget.textContent = soundOn
    ? "🔊 Sound On"
    : "🔇 Sound Off";
});

document.getElementById("difficulty").addEventListener("change", () => {
  if (gameRunning) {
    clearTimeout(timer);
    gameLoop();
  }
});

function gameLoop() {
  if (!gameRunning) return;

  const baseSpeed = Number(
    document.getElementById("difficulty").value
  );

  timer = setTimeout(() => {
    if (!gameRunning) return;

    dx = nextDx;
    dy = nextDy;

    moveSnake();
    if (gameRunning) drawGame();

    if (gameRunning) gameLoop();
  }, Math.max(45, baseSpeed - score * 3));
}

function moveSnake() {
  const head = {
    x: snake[0].x + dx,
    y: snake[0].y + dy
  };

  // Wall collision
  if (
    head.x < 0 || head.x >= canvas.width ||
    head.y < 0 || head.y >= canvas.height
  ) {
    endGame();
    return;
  }

  const eating = head.x === food.x && head.y === food.y;

  // The tail moves away on a normal move, so exclude it
  // when the snake is not eating.
  const body = eating ? snake : snake.slice(0, -1);

  if (body.some(part => part.x === head.x && part.y === head.y)) {
    endGame();
    return;
  }

  snake.unshift(head);

  if (eating) {
    score++;
    scoreEl.textContent = score;
    playSound(600);

    if (score > highScore) {
      highScore = score;
      highScoreEl.textContent = highScore;
      localStorage.setItem("highScore", highScore);
    }

    placeFood();
  } else {
    snake.pop();
  }
}

function endGame() {
  gameRunning = false;
  gameOver = true;
  clearTimeout(timer);

  pauseBtn.disabled = true;
  startBtn.disabled = false;
  startBtn.textContent = "▶ Play Again";

  playSound(180);
  showMessage("💥 Game Over!", `Your score: ${score}. Press Play Again!`);
}

function drawGame() {
  ctx.fillStyle = "#09131d";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Game board grid
  ctx.strokeStyle = "#172735";
  ctx.lineWidth = 0.5;

  for (let i = 0; i <= canvas.width; i += grid) {
    ctx.beginPath();
    ctx.moveTo(i, 0);
    ctx.lineTo(i, canvas.height);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, i);
    ctx.lineTo(canvas.width, i);
    ctx.stroke();
  }

  // Food
  ctx.fillStyle = "#ff496c";
  ctx.shadowColor = "#ff496c";
  ctx.shadowBlur = 12;
  ctx.beginPath();
  ctx.arc(food.x + 10, food.y + 10, 8, 0, Math.PI * 2);
  ctx.fill();
  ctx.shadowBlur = 0;

  // Snake
  snake.forEach((part, index) => {
    ctx.fillStyle = index === 0 ? "#b7ffcf" : "#39e981";
    ctx.shadowColor = "#39e981";
    ctx.shadowBlur = index === 0 ? 10 : 3;

    ctx.beginPath();
    ctx.roundRect(part.x + 1, part.y + 1, 18, 18, 5);
    ctx.fill();
  });

  ctx.shadowBlur = 0;

  // Snake eyes
  const head = snake[0];
  ctx.fillStyle = "#10251a";

  let eye1, eye2;

  if (dx > 0) {
    eye1 = [head.x + 14, head.y + 5];
    eye2 = [head.x + 14, head.y + 13];
  } else if (dx < 0) {
    eye1 = [head.x + 4, head.y + 5];
    eye2 = [head.x + 4, head.y + 13];
  } else if (dy < 0) {
    eye1 = [head.x + 5, head.y + 4];
    eye2 = [head.x + 13, head.y + 4];
  } else {
    eye1 = [head.x + 5, head.y + 14];
    eye2 = [head.x + 13, head.y + 14];
  }

  [eye1, eye2].forEach(eye => {
    ctx.beginPath();
    ctx.arc(eye[0], eye[1], 2, 0, Math.PI * 2);
    ctx.fill();
  });
}

initGame();
showMessage("Ready to Play?", "Press Start and enjoy the game!");
