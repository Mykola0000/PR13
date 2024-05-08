document.addEventListener("DOMContentLoaded", function() {
    const player = document.getElementById("player");
    const gameContainer = document.getElementById("gameContainer");
    const scoreDisplay = document.getElementById("score");
    const timeDisplay = document.getElementById("time");
    let score = 0;
    let timeLeft = 15;

    function movePlayer(event) {
        const rect = gameContainer.getBoundingClientRect();
        const x = event.clientX - rect.left - player.clientWidth / 2;
        const y = event.clientY - rect.top - player.clientHeight / 2;

        player.style.left = x + "px";
        player.style.top = y + "px";
    }

    function getRandomPosition() {
        const x = Math.floor(Math.random() * (gameContainer.clientWidth - player.clientWidth));
        const y = Math.floor(Math.random() * (gameContainer.clientHeight - player.clientHeight));
        return { x, y };
    }

    function checkCollision() {
        const playerRect = player.getBoundingClientRect();
        const targetRect = target.getBoundingClientRect();

        if (playerRect.left < targetRect.right &&
            playerRect.right > targetRect.left &&
            playerRect.top < targetRect.bottom &&
            playerRect.bottom > targetRect.top) {
            score++;
            scoreDisplay.textContent = "Score: " + score;
            const newPosition = getRandomPosition();
            target.style.left = newPosition.x + "px";
            target.style.top = newPosition.y + "px";
        }
    }

    function updateTime() {
        timeLeft--;
        timeDisplay.textContent = "Time left: " + timeLeft + "s";

        if (timeLeft === 0) {
            clearInterval(timer);
            gameContainer.removeEventListener("mousemove", movePlayer);
            alert("Game Over! Your final score is: " + score);
        }
    }

    gameContainer.addEventListener("mousemove", movePlayer);

    const target = document.createElement("div");
    target.style.width = "20px";
    target.style.height = "20px";
    target.style.backgroundColor = "yellow";
    target.style.position = "absolute";
    const position = getRandomPosition();
    target.style.left = position.x + "px";
    target.style.top = position.y + "px";
    gameContainer.appendChild(target);

    const colorSelect = document.getElementById("color");
    colorSelect.addEventListener("change", function() {
        target.style.backgroundColor = colorSelect.value;
    });

    const timer = setInterval(updateTime, 1000);
});
