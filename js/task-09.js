// Напиши скрипт, який змінює кольори фону 
// елемента <body> через інлайн-стиль по кліку на 
// button.change-color і виводить значення кольору 
// в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>
// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

// const setRandomColorWithChange = () => {
//   const randomColor = Math.floor(Math.random()*16777215).toString(16);
//   inputText.style.color = "#" + randomColor;
// };

// input.addEventListener("change", setRandomColorWithChange);
// setRandomColorWithChange();

const buttonColorRandomizer = document.querySelector("button.change-color");
const currentColor = document.querySelector("span.color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

buttonColorRandomizer.addEventListener("click", () => {
  const randomColor = getRandomHexColor();
  currentColor.textContent = randomColor;
  document.body.style.backgroundColor = randomColor;
});