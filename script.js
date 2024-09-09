const rabbit = document.getElementById("rabbit");
const grass = document.getElementById("grass");
const scoreElement = document.getElementById("score");

let score = 0; // Счёт

document.addEventListener("keydown", function(event) {
  jump();
});

function jump() {
  if (!rabbit.classList.contains("jump")) {
    rabbit.classList.add("jump");
    setTimeout(function() {
      rabbit.classList.remove("jump");
    }, 500);
  }
}

function randomGrassSize() {
  const height = Math.floor(Math.random() * 60) + 20; // Высота от 20 до 80 пикселей
  grass.style.height = `${height}px`;
  grass.style.backgroundSize = `20px ${height}px`;
  grass.style.top = `${200 - height}px`; // Расположить траву на уровне кролика
}

// Запускаем случайный размер травы
randomGrassSize();

let isAlive = setInterval(function() {
  let rabbitTop = parseInt(window.getComputedStyle(rabbit).getPropertyValue("top"));
  let grassLeft = parseInt(window.getComputedStyle(grass).getPropertyValue("left"));

  if (grassLeft < 50 && grassLeft > 0 && rabbitTop >= 140) {
    alert("Кролик потерялся в траве!");
    score = 0; // Сброс счёта
    scoreElement.innerText = `Счёт: ${score}`;
  } else if (grassLeft < 0) {
    score++; // Увеличиваем счёт
    scoreElement.innerText = `Счёт: ${score}`;
    grass.style.left = "580px"; // Возвращаем траву в начальное положение
    randomGrassSize(); // Изменяем размер травы
  }
}, 10);
