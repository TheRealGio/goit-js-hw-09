const form = document.querySelector('.form');
const firstDelayMs = document.querySelector('[name="delay"]');
const delayStepMs = document.querySelector('[name="step"]');
const amount = document.querySelector('[name="amount"]');

form.addEventListener('submit', createPromiseFunction);

function createPromiseFunction(event) {
  event.preventDefault();

  let delay = firstDelayMs.valueAsNumber;
  const stepDelay = delayStepMs.valueAsNumber;
  const amountValue = amount.valueAsNumber;

  for (let i = 1; i <= amountValue; i++) {
    createPromise(i, delay)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${i} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${i} in ${delay}ms`);
      });
    delay += stepDelay;
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
