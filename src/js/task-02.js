// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй 
// метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію 
// у список ul.ingredients.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("ul")

ingredients.map(ingredient => {
  const listIngredients = document.createElement("li")
  listIngredients.textContent = `${ingredient}`
  listIngredients.classList.add("item")
  list.appendChild(listIngredients)
  // list.insertAdjacentHTML("beforeend", listIngredients)
  // console.log(listIngredients);
});