// Напиши скрипт, який під час набору тексту 
// в інпуті input#name-input (подія input), 
// підставляє його поточне значення в 
// span#name-output. Якщо інпут порожній, 
// у спані повинен відображатися рядок "Anonymous".

const inputName = document.querySelector("#name-input")
const outputName = document.querySelector("#name-output")

inputName.addEventListener("input", (event) => {
outputName.textContent = event.currentTarget.value
? event.currentTarget.value : "Anonymous"})

// if (outputName.textContent === null) {
//     outputName.textContent = "Anonymous";
// };

// textInput.addEventListener("input", (event) => {
//    output.textContent = event.currentTarget.value;
// });