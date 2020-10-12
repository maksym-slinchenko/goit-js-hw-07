// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const counterValueEl = document.querySelector('#value');
let counterValue = 0;
const incrementBtnEl = document.querySelector('[data-action="increment"]');
const onIncrementBtnElClick = () => {
  return (counterValueEl.textContent = counterValue += 1);
};

incrementBtnEl.addEventListener('click', onIncrementBtnElClick);

const decrementBtnEl = document.querySelector('[data-action="decrement"]');
const onDecrementBtnElClick = () => {
  if (counterValue > 0) {
    return (counterValueEl.textContent = counterValue -= 1);
  }
};

decrementBtnEl.addEventListener('click', onDecrementBtnElClick);
