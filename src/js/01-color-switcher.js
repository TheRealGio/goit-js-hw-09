const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');
const body = document.querySelector('body');
let timer = null;
stopButton.disabled = true;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const backgroundColorSwitcher = () => {
  body.style.backgroundColor = getRandomHexColor();
  body.style.color = getRandomHexColor();
};

startButton.addEventListener('click', () => {
  timer = setInterval(backgroundColorSwitcher, 1000);
  startButton.disabled = true;
  stopButton.disabled = false;
});

stopButton.addEventListener('click', () => {
  clearInterval(timer);
  startButton.disabled = false;
  stopButton.disabled = true;
});
