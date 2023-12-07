//4

const formLogin = document.querySelector('.login-form');

const sendUserInfo = event => {
  event.preventDefault();
  const form = event.target;
  const login = form.elements.email.value;
  const password = form.elements.password.value;

  if (!login || !password) {
    alert('All form fields must be filled in');
    return;
  }

  const userInfo = {};
  userInfo[form.elements.email.name] = login.trim();
  userInfo[form.elements.password.name] = password.trim();

  console.log(userInfo);

  formLogin.reset();
};

formLogin.addEventListener('submit', sendUserInfo);

// Цей код використовує JavaScript для взаємодії зі сторінкою HTML,
//   зокрема з формою авторизації(login - form).Давайте розглянемо його
//    крок за кроком:

// const formLogin = document.querySelector('.login-form');:

// Отримуємо посилання на HTML - елемент форми з класом login - form за
// допомогою методу document.querySelector.Це дає нам можливість взаємодіяти
// з елементами в цій формі.
// const sendUserInfo = event => { ... };:

// Створюємо функцію sendUserInfo, яка приймає об'єкт події (event) як параметр.
//  Ця функція буде викликана при відправці форми.
// event.preventDefault();:

// Викликаємо метод preventDefault() для об'єкта події, щоб уникнути звичайної
// відправки форми(перезавантаження сторінки).
// const form = event.target;:

// Отримуємо посилання на саму форму, з якою відбувається взаємодія, через
//  властивість target об'єкта події.
// const login = form.elements.email.value; та
// const password = form.elements.password.value;:

// Отримуємо значення полів вводу з іменами email та password відповідно.
// if (!login || !password) { ... }:

// Перевіряємо, чи обидва поля вводу заповнені.Якщо хоча б одне з них порожнє,
//   виводимо сповіщення і завершуємо виконання функції.
// const userInfo = {};:

// Створюємо порожній об'єкт userInfo, який буде містити інформацію з форми.
// userInfo[form.elements.email.name] = login.trim();
// та userInfo[form.elements.password.name] = password.trim();:

// Заповнюємо об'єкт userInfo інформацією з форми, де ключами є імена полів вводу, а значеннями - введені дані після видалення зайвих пробілів.
// console.log(userInfo);:

// Виводимо інформацію з userInfo у консоль для демонстрації.
// formLogin.reset();:

// Очищаємо дані форми, скидаючи її до початкового стану.
// formLogin.addEventListener('submit', sendUserInfo);:
// Додаємо прослуховувач подій для форми, який викликає функцію sendUserInfo
// при спробі її відправки.
