// Лічильник складається зі спану і кнопок, 
// які по кліку повинні збільшувати і зменшувати 
// його значення на одиницю.

// Створи змінну counterValue, в якій буде зберігатися
// поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких 
// збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

const buttonDecrement = document.querySelector('button[data-action="decrement"]');
const buttonIncrement = document.querySelector('button[data-action="increment"]');
let counterValue = 0;
const interfaceValue = document.querySelector("#value")

buttonDecrement.addEventListener("click", () => {
    counterValue-=1;
    interfaceValue.textContent = counterValue;
})

buttonIncrement.addEventListener("click", () => {
    counterValue+=1;
    interfaceValue.textContent = counterValue;
})