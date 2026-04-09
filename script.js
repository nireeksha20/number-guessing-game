let number, attempts, maxRange;
let startTime;

const feedback = document.getElementById("feedback");
const attemptsText = document.getElementById("attempts");
const timerText = document.getElementById("timer");
const bestScoreText = document.getElementById("bestScore");

startGame();

/* START GAME */
function startGame() {
  maxRange = document.getElementById("difficulty").value;
  number = Math.floor(Math.random() * maxRange) + 1;
  attempts = 0;
  startTime = Date.now();

  feedback.innerText = "";
  attemptsText.innerText = "";
  timerText.innerText = "";
}

/* CHECK GUESS */
function checkGuess() {
  let guess = Number(document.getElementById("guessInput").value);

  if (!guess) return;

  attempts++;

  if (guess === number) {
    let timeTaken = ((Date.now() - startTime) / 1000).toFixed(2);

    feedback.innerText = `🎉 Correct! Number was ${number}`;
    attemptsText.innerText = `Attempts: ${attempts}`;
    timerText.innerText = `Time: ${timeTaken}s`;

    saveBest(attempts);
  } else if (guess > number) {
    feedback.innerText = "📉 Too High!";
  } else {
    feedback.innerText = "📈 Too Low!";
  }
}

/* BEST SCORE */
function saveBest(score) {
  let best = localStorage.getItem("bestScore");

  if (!best || score < best) {
    localStorage.setItem("bestScore", score);
    bestScoreText.innerText = `🏆 Best Score: ${score}`;
  } else {
    bestScoreText.innerText = `🏆 Best Score: ${best}`;
  }
}

/* RESTART */
function restartGame() {
  document.getElementById("guessInput").value = "";
  startGame();
}

/* DIFFICULTY */
function setDifficulty() {
  restartGame();
}

/* THEME */
function toggleMode() {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
}
