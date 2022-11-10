import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const startButton = document.querySelector('button[data-start]');
const days = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours');
const minutes = document.querySelector('[data-minutes]');
const seconds = document.querySelector('[data-seconds]');
const chosenDate = document.getElementById('datetime-picker');

startButton.disabled = true;
startButton.addEventListener('click', countDown);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    dateValidation(selectedDates[0]);
  },
};

function dateValidation(date) {
  if (date < Date.now()) {
    window.alert('Please choose a date in the future');
  } else {
    startButton.disabled = false;
  }
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  const stringValue = String(value);
  return stringValue.padStart(2, '0');
}

function countDown() {
  timer = setInterval(() => {
    startButton.disabled = true;
    chosenDate.disabled = true;
    const timeOfDateChosen = new Date(
      chosenDate.value.replace(/-/g, '/')
    ).getTime();
    const timeLeft = timeOfDateChosen - Date.now();

    const timerValues = convertMs(timeLeft);

    days.innerHTML =
      timerValues.days < 10
        ? addLeadingZero(timerValues.days)
        : timerValues.days;
    hours.innerHTML =
      timerValues.hours < 10
        ? addLeadingZero(timerValues.hours)
        : timerValues.hours;
    minutes.innerHTML =
      timerValues.minutes < 10
        ? addLeadingZero(timerValues.minutes)
        : timerValues.minutes;
    seconds.innerHTML =
      timerValues.seconds < 10
        ? addLeadingZero(timerValues.seconds)
        : timerValues.seconds;
    if (timeLeft < 1000) {
      clearInterval(timer);
      startButton.disabled = false;
    }
  }, 1000);
}

flatpickr(chosenDate, options);
