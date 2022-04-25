// Завдання 10 (виконувати не обов'язково)
// Напиши скрипт створення і очищення колекції 
// елементів. Користувач вводить кількість елементів 
// в input і натискає кнопку Створити, після чого 
// рендериться колекція. Натисненням на кнопку 
// Очистити, колекція елементів очищається.

// Створи функцію createBoxes(amount), яка приймає один 
// параметр - число. Функція створює стільки <div>, 
// скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і 
// вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у 
// форматі HEX. Використовуй готову функцію 
// getRandomHexColor для отримання кольору.
// Створи функцію destroyBoxes(), яка очищає вміст 
// div#boxes, у такий спосіб видаляючи всі створені елементи.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const inputValue = document.querySelector('#controls input');
const boxesCatalogue = document.querySelector('div#boxes');

boxesCatalogue.style.display = 'flex';

function createBoxes(amount) {
  for (let index = 0; index < inputValue.value; index+=1) {
    const createDivElem = document.createElement('div');
    // createDivElem.textContent = `${index}`;
    createDivElem.style.backgroundColor = getRandomHexColor();

    const boxOfBoxesCatalogue = boxesCatalogue.children;

    const startSize = 30;
    const lastChildElem = createDivElem.lastChild;
    // console.log(lastChildElem);
    // lastChildElem.style.width = `${startSize}px`;

    // хотів зробити forEach та не зміг, чому так і не зрозумів
    for (let i = 0; i < boxOfBoxesCatalogue.length; i += 1) {
    // перший елемент тут ігнорується, не розумію чому
    // якщо поставити i = 1 то буде ігноруватися 2 перших елементи.
      boxOfBoxesCatalogue[i].style.width = `${startSize + 10 * i}px`;
      boxOfBoxesCatalogue[i].style.height = `${startSize + 10 * i}px`;
    }
    boxesCatalogue.append(createDivElem);
  }
}

createBtn.addEventListener("click", createBoxes);

const destroyBoxes = () => boxesCatalogue.innerHTML = '';

destroyBtn.addEventListener("click", destroyBoxes);