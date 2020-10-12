// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input),
// подставляет его текущее значение в span#name-output.
// Если инпут пустой, в спане должна отображаться строка 'незнакомец'.
const nameInputEl = document.querySelector('#name-input');
const nameOutputEl = document.querySelector('#name-output');
const changeName = () => {
  nameInputEl.value != ''
    ? (nameOutputEl.innerText = nameInputEl.value)
    : (nameOutputEl.innerText = 'незнакомец');
};
const onNameInputElInput = addEventListener(
  'input',
  changeName,
);
