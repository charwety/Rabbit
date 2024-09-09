const rabbit = document.getElementById("rabbit");
const grass = document.getElementById("grass");
const scoreElement = document.getElementById("score");
let score = 0;

document.addEventListener("keydown", () => jump());

function jump() {
  if (!rabbit.classList.contains("jump")) {
    rabbit.classList.add("jump");
    setTimeout(() => rabbit.classList.remove("jump"), 500);
  }
}

function randomGrassSize() {
  const height = Math.floor(Math.random() * 60) + 20;
  grass.style.height = `${height}px`;
  grass.style.backgroundSize = `20px ${height}px`;
  grass.style.top = `${200 - height}px`;
}

randomGrassSize();

setInterval(() => {
  let rabbitTop = parseInt(window.getComputedStyle(rabbit).getPropertyValue("top"));
  let grassLeft = parseInt(window.getComputedStyle(grass).getPropertyValue("left"));

  if (grassLeft < 50 && grassLeft > 0 && rabbitTop >= 140) {
    alert("Кролик потерялся в траве!");
    score = 0;
  } else if (grassLeft < 0) {
    score++;
    grass.style.left = "580px";
    randomGrassSize();
  }

  scoreElement.innerText = `Счёт: ${score}`;
}, 10);
