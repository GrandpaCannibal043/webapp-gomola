const button = document.getElementById('click-btn');
const scoreDisplay = document.getElementById('score');
const resultDisplay = document.getElementById('result');

let score = 0;
let timeLeft = 10;
let gameActive = true;

function moveButton() {
    const x = Math.random() * (window.innerWidth - 150);
    const y = Math.random() * (window.innerHeight - 150);
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
}

button.addEventListener('click', () => {
    if (!gameActive) return;
    score++;
    scoreDisplay.textContent = `Skóre: ${score}`;
    moveButton();
});

setTimeout(() => {
    gameActive = false;
    button.disabled = true;
    resultDisplay.textContent = `Koniec hry! Dosiahol si ${score} klikov.`;
}, timeLeft * 1000);

moveButton();
