// В HTML есть пустой список ul#ingredients.

// В JS есть массив строк.

// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
// после чего вставит все li за одну операцию в список ul.ingredients.
// Для создания DOM-узлов используй document.createElement().

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ingredientsEl = document.querySelector(
  '#ingredients',
);

const element = ingredients.map(
  option => {
    const liEl = document.createElement(
      'li',
    );
    liEl.textContent = option;
    return liEl;
  },
);

ingredientsEl.append(...element);
