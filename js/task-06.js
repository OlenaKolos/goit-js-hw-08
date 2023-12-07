//6

const numberValue = document.querySelector('input[type="number"]');
const buttonCreate = document.querySelector('button[data-create]');
const buttonDestroy = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');

buttonCreate.addEventListener('click', () => {
  const amount = numberValue.value;
  const valueMax = Number(numberValue.max);
  const valueMin = Number(numberValue.min);

  // check if the input number is greater than 100 or less than 1
  if (amount >= valueMin && amount <= valueMax) {
    createBoxes(amount);
  }

  // clear the input field
  numberValue.value = '';
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  boxes.innerHTML = '';
  const boxesItems = [];
  let boxSize = 30;
  for (let i = 1; i <= amount; i += 1) {
    let div = document.createElement('div');
    div.style.backgroundColor = getRandomHexColor();
    div.style.width = `${boxSize}px`;
    div.style.height = `${boxSize}px`;
    boxesItems.push(div);

    boxSize += 10;
  }
  boxes.append(...boxesItems);
}

const destroyBoxes = () => (boxes.innerHTML = '');

buttonDestroy.addEventListener('click', destroyBoxes);

// Цей код реалізує функціонал створення та очищення колекції елементів в
// залежності від введених користувачем даних.Давайте розглянемо кожен
// рядок коду:

// const numberValue = document.querySelector('input[type="number"]');:

// Отримуємо посилання на елемент input з типом "number", який ймовірно
// містить введене користувачем число елементів.
// const buttonCreate = document.querySelector('button[data-create]');:

// Отримуємо посилання на кнопку з атрибутом data - create.Ця кнопка буде
//  відповідальною за створення колекції елементів.
// const buttonDestroy = document.querySelector('button[data-destroy]');:

// Отримуємо посилання на кнопку з атрибутом data - destroy.Ця кнопка буде
// відповідальною за очищення колекції елементів.
// const boxes = document.querySelector('#boxes');:

// Отримуємо посилання на контейнер, в який будуть вставлятися елементи колекції.
// buttonCreate.addEventListener('click', () => { ... });:

// Додаємо прослуховувач подій на кнопку "Create", який викликає функцію
// при кліку на кнопку.
// const amount = numberValue.value;:

// Отримуємо значення введеного числа в input.
// const valueMax = Number(numberValue.max); і const valueMin = Number(numberValue.min);:

// Отримуємо максимальне та мінімальне значення для валідації введеного числа.
// if (amount >= valueMin && amount <= valueMax) { createBoxes(amount); }:

// Перевіряємо, чи введене число знаходиться в межах мінімального та
// максимального значень.Якщо так, викликаємо функцію createBoxes.
// numberValue.value = '';:

// Очищаємо поле введення після створення колекції.
// function getRandomHexColor() { ... }:

// Функція для генерації випадкового кольору у форматі шестнадцяткового числа.
// function createBoxes(amount) { ... }:

// Функція, яка створює колекцію елементів і вставляє їх в контейнер.
// boxes.innerHTML = '';:

// Очищаємо контейнер перед додаванням нових елементів.
// const boxesItems = [];:

// Створюємо масив, в якому будемо зберігати створені елементи.
// let boxSize = 30;:

// Ініціалізуємо розмір першого елемента.
// let div = document.createElement('div');:

// Створюємо новий елемент div для кожного елемента колекції.
// div.style.backgroundColor = getRandomHexColor();:

// Задаємо елементу випадковий фоновий колір.
// div.style.width = ${boxSize}px; і div.style.height = ${boxSize}px;:

// Задаємо ширину та висоту елемента, збільшуючи їх розміри на 10px для
// кожного нового елемента.
// boxesItems.push(div);:

// Додаємо створений елемент до масиву.
// boxSize += 10;:

// Збільшуємо розмір для наступного елемента.
// boxes.append(...boxesItems);:

// Додаємо всі елементи масиву до контейнера.
// const destroyBoxes = () => (boxes.innerHTML = '');:

// Створюємо функцію destroyBoxes, яка очищає контейнер.
// buttonDestroy.addEventListener('click', destroyBoxes);:

// Додаємо прослуховувач подій на кнопку "Destroy", який викликає функцію
// очищення контейнера при кліку на кнопку.
