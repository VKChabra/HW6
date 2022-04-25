// Напиши скрипт, який реагує на зміну значення 
// input#font-size-control (подія input) і змінює 
// інлайн-стиль span#text, оновлюючи властивість 
// font-size. В результаті, перетягуючи повзунок, 
// буде змінюватися розмір тексту.

const input = document.querySelector("#font-size-control");
const inputText = document.querySelector("#text");
input.value = 16;
input.addEventListener("input", () =>
inputText.style.fontSize = `${input.value}px`);

// colorize
const setRandomColorWithChange = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    inputText.style.color = "#" + randomColor;
};

input.addEventListener("change", setRandomColorWithChange);
setRandomColorWithChange();