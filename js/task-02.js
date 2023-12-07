//2

const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
  {
    url: 'https://images.pexels.com/photos/66898/elephant-cub-tsavo-kenya-66898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Elephant Beside on Baby Elephant',
  },
  {
    url: 'https://images.pexels.com/photos/37833/rainbow-lorikeet-parrots-australia-rainbow-37833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Blue Geeen and Orange Parrot',
  },
  {
    url: 'https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Zebras on Zebra',
  },
];

const gallery = document.querySelector('.gallery');
let list = '';
for (const obj of images) {
  list += `<li> <img src="${obj.url}" alt="${obj.alt}" width="360"> </li>`;
}
gallery.insertAdjacentHTML('beforeend', list);

// const gallery = document.querySelector('.gallery');:

// Отримуємо посилання на HTML-елемент з класом gallery за допомогою методу document.querySelector. Цей елемент припустимо як контейнер для нашої галереї.
// let list = '';:

// Створюємо порожню змінну list, яка буде використовуватися для накопичення рядків HTML-розмітки.
// for (const obj of images) { ... }:

// Використовуємо цикл for...of, щоб пройтися по кожному об'єкту в масиві images.
// list += <li class="gallery-item"><img class="gallery-img" src="${obj.url}" alt="${obj.alt}" width="360"></li>;:

// В кожній ітерації циклу додаємо до змінної list рядок HTML для елементу <li>, що містить зображення <img>.
// Використовуємо шаблонний рядок для вставки значень url і alt у відповідні атрибути src і alt.
// Кожне зображення має класи gallery-item для <li> і gallery-img для <img>.
// Ширина зображення вказана як 360 пікселів.
// gallery.insertAdjacentHTML('beforeend', list);:

// Використовує метод insertAdjacentHTML, щоб вставити накопичений HTML-рядок list перед закриваючим тегом елементу, обраним за допомогою gallery (.beforeend означає "перед закриваючим тегом елементу, який обраний методом gallery, але всередині цього елементу").
// Це додає створену розмітку до HTML сторінки всередину контейнера з класом gallery.
// Отже, результатом буде галерея, в якій кожне зображення має свій елемент <li> з дочірнім елементом <img>, атрибути якого взято з відповідних об'єктів масиву images. Кожне зображення також має свої класи для стилізації за допомогою CSS.
