let score = 0;
let timeLeft = 30; 
let level = 1;
let interval;
let colors = ['red', 'blue', 'green', 'yellow']; 


function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function updateScore() {
  document.getElementById('score').textContent = `Рахунок: ${score}`;
}


function updateTime() {
  document.getElementById('time').textContent = `Час: ${timeLeft} с`;
}


function startGame() {
  score = 0;
  timeLeft = 30;
  level = document.getElementById('difficulty').value; 
  updateScore();
  updateTime();
  moveBox(); 
  interval = setInterval(updateTime, 1000); 
  document.getElementById('gameControls').style.display = 'none'; 
  document.getElementById('score').style.display = 'block'; 
  document.getElementById('time').style.display = 'block'; 
  document.getElementById('box').style.display = 'block'; 
}


function moveBox() {
  const box = document.getElementById('box');
  const screenWidth = window.innerWidth - 100; 
  const screenHeight = window.innerHeight - 100; 
  const randomX = getRandomNumber(0, screenWidth);
  const randomY = getRandomNumber(0, screenHeight);
  box.style.left = `${randomX}px`;
  box.style.top = `${randomY}px`;
}


function handleClick() {
  score++;
  updateScore();
  moveBox();
  if (timeLeft === 30) {
    startTimer();
  }
}


function startTimer() {
  interval = setInterval(function() {
    timeLeft--;
    updateTime();
    if (timeLeft === 0) {
      endGame();
    }
  }, 1000);
}


function endGame() {
  clearInterval(interval); 
  alert(`Гра завершена! Ваш рахунок: ${score}`);
}


document.getElementById('box').addEventListener('click', handleClick);


document.getElementById('colorPicker').addEventListener('change', function(event) {
  const color = event.target.value;
  document.getElementById('box').style.backgroundColor = color;
});
