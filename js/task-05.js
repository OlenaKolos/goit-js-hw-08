//5

const colorGeneral = document.querySelector('.color');
const button = document.querySelector('.change-color');

button.addEventListener('click', changeBodyColor);

function changeBodyColor() {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  colorGeneral.textContent = color;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

///
// Цей код використовує JavaScript для зміни кольору фону сторінки та
//  виведення випадкового кольору у визначений HTML - елемент при кліку
//   на кнопку.Давайте розглянемо його крок за кроком:

// const colorGeneral = document.querySelector('.color');:

// Отримуємо посилання на HTML - елемент з класом color.Ймовірно,
//   це якийсь текстовий елемент, в якому буде виводитися випадковий колір.
// const button = document.querySelector('.change-color');:

// Отримуємо посилання на HTML-елемент кнопки з класом change-color.
// button.addEventListener('click', changeBodyColor);:

// Додаємо прослуховувач подій для кнопки.При кліку на кнопку буде
//  викликана функція changeBodyColor.
// function changeBodyColor() { ... }:

// Створюємо функцію changeBodyColor, яка буде викликана при кліку на кнопку.
// const color = getRandomHexColor();:

// Викликаємо функцію getRandomHexColor, щоб отримати випадковий
// шестнадцятковий колір.
// document.body.style.backgroundColor = color;:

// Змінюємо колір фону сторінки, встановлюючи властивість backgroundColor
//  для document.body.
// colorGeneral.textContent = color;:

// Виводимо випадковий колір у текстовий елемент colorGeneral.Це може
// бути, наприклад, для відображення самого коліру або його значення.
// function getRandomHexColor() { ... }:

// Створюємо функцію getRandomHexColor, яка генерує та повертає випадковий
// шестнадцятковий колір.Функція використовує Math.random() для отримання
// випадкового числа та toString(16) для перетворення його в шестнадцятковий
// формат.Метод padStart(6, 0) додає нулі до строки, якщо вона коротша за
// 6 символів.
