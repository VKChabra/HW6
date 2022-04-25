// Напиши скрипт управління формою логіна.

// Обробка відправлення форми form.login-form 
// повинна відбуватися відповідно до події submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля, виводь alert 
// з попередженням про те, що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив 
// форму, збери значення полів в об'єкт, де ім'я 
// поля буде ім'ям властивості, а значення поля - 
// значенням властивості. Для доступу до елементів 
// форми використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль і 
// очисти значення полів форми методом reset.

//submit
//preventDefault
//empty.textContent -> alert
// elements (doc.querySelector("body").childNodes[1]?)
// reset

const form = document.querySelector('.login-form');
const formElements = document.querySelector("form").elements;
// console.log(formElements);
const emailInput = formElements["email"]
const passwordInput = formElements["password"]

function handleSubmit(event) {
  event.preventDefault();

  if (emailInput.value === "" || passwordInput.value === "") {
    return alert("Please fill in all the fields!");
  }

  console.log(`Email: ${emailInput.value}`, 
  `Password: ${passwordInput.value}`);
  event.currentTarget.reset();
}

form.addEventListener("submit", handleSubmit);