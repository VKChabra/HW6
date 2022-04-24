// Напиши скрипт, який під час втрати фокусу на 
// інпуті (подія blur), перевіряє його вміст щодо 
// правильної кількості введених символів.

// Яка кількість смиволів повинна бути в інпуті, 
// зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border 
// інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і 
// invalid, які ми вже додали у вихідні файли завдання.

const input = document.querySelector("#validation-input");

input.addEventListener('blur', event => {
    if (input.value.length !== 6) {
        input.classList.remove('valid');
        input.classList.add('invalid');
    } else {
        input.classList.remove('invalid');
        input.classList.add('valid');
    }
});


// code lower is done by someone very mad and unattentive


// const validColor = document.getElementsByClassName("valid")
// const invalidColor = document.getElementsByClassName("invalid")
// input.addEventListener("input", (validate) => {
// if (input.value.length !== 6) {
//     getComputedStyle(input).setProperty("border-color", `${invalidColor}`) 
// }
//     getComputedStyle(input).setProperty("border-color", `${validColor}`)
// }
// );
// console.log(input.getAttribute("data-length"))
// console.log(getComputedStyle(document.documentElement));
// console.log(getComputedStyle(input).getPropertyValue('border'));