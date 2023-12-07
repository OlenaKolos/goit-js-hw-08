//3

const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

const checkInput = () => {
  output.textContent =
    input.value.trim() === '' ? 'Anonymous' : input.value.trim();
};

input.addEventListener('input', checkInput);

// Цей код використовує JavaScript для взаємодії зі сторінкою HTML і
// реагує на введення користувача в поле введення з ідентифікатором
// name - input.Результат відображається в елементі з ідентифікатором
// name - output.Давайте розглянемо кожен рядок коду:

// const input = document.querySelector('#name-input');:

// Отримуємо посилання на HTML - елемент з ідентифікатором name - input
// за допомогою методу document.querySelector.Це поле введення, яке
// користувач використовує для введення тексту.
// const output = document.querySelector('#name-output');:

// Отримуємо посилання на HTML - елемент з ідентифікатором name - output.
// Це елемент, де буде відображатися результат.
// const checkInput = () => { ... };:

// Створюємо функцію checkInput, яка буде викликатися при зміні вмісту поля
// введення.
// output.textContent = input.value.trim() === '' ? 'Anonymous' : input.value.trim();:

// Перевіряємо значення введення (відсутність введення або наявність тексту).
// Якщо значення після видалення пробілів(використовуючи trim()) є пустим,
//   встановлюємо текст виводу на 'Anonymous'.
// В іншому випадку встановлюємо текст виводу на значення введення після
//  видалення пробілів.
// input.addEventListener('input', checkInput);:

// Додаємо прослуховувач подій для введення(input) до поля введення.
// Кожен раз, коли користувач вводить текст, викликається функція checkInput.
//   Отже, код реагує на введення користувача в поле введення, перевіряє
//  його на наявність тексту та відображає результат в елементі з ідентифікатором name - output.Якщо поле введення порожнє, виводиться 'Anonymous'.
