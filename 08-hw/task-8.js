// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает кнопку Создать,
// после чего рендерится коллекция. При нажатии на кнопку Очистить,
// коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.
// Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

const controlsEl = document.querySelector('#controls');
const inputAmountEl = document.querySelector('#controls input');
const buttonRenderEl = document.querySelector('[data-action="render"]');
const buttonDestroyEl = document.querySelector('[data-action="destroy"]');
const boxesEl = document.querySelector('#boxes');

const createBoxes = amount => {
  amount = inputAmountEl.valueAsNumber;
  for (let i = 0; i < amount; i += 1) {
    const boxEl = document.createElement('div');
    boxEl.id = 'box' + i;
    boxEl.style.width = 30 + 10 * i + 'px';
    boxEl.style.height = 30 + 10 * i + 'px';
    boxEl.style.backgroundColor =
      'rgb(' +
      Math.floor(Math.random() * 256) +
      ',' +
      Math.floor(Math.random() * 256) +
      ',' +
      Math.floor(Math.random() * 256) +
      ')';
    boxesEl.append(boxEl);
  }
};
buttonRenderEl.addEventListener('click', createBoxes);

const destroyBoxes = () => {
  const boxList = document.querySelectorAll('#boxes div');
  for (let i = 0; i < boxList.length; i += 1) {
    boxList[i].remove();
  }
};
buttonDestroyEl.addEventListener('click', destroyBoxes);
