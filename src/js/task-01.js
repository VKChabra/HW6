// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у спику ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// В результаті, в консолі будуть виведені наступні повідомлення.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

const categoriesLists = document.querySelectorAll(".item")
// const categoriesLists = document.getElementsByClassName("item")
console.log(`Number of categories: ${categoriesLists.length}`);

const ulInCategories = document.querySelectorAll("#categories>li");
// console.log(ulInCategories);
ulInCategories.forEach(el => {
    console.log(`Category: ${el.firstElementChild.textContent},
    Elements: ${el.lastElementChild.children.length}`);
})


// function categoriesNames() {
//     const names = document.querySelectorAll("h2")
//     names.forEach(categoryName => 
//         console.log(`Category: ${categoryName.textContent}`))
// };
// categoriesNames();

// const ulInCategories = document.querySelectorAll("#categories ul");
// function itemsCount() {
//     ulInCategories.forEach(element => {
//         console.log(`Elements: ${element.children.length}`);
//     });
// }
// itemsCount()

// це пипець але видаляти цю дурку я не буду

// function categoriesNames() {
//     const names = document.querySelectorAll("h2")
//     names.forEach(categoryName => 
//         console.log(`Category: ${categoryName.textContent}`))
// };
// categoriesNames();

// const ulInCategories = document.querySelectorAll("#categories ul");
// function itemsCount() {
//     ulInCategories.forEach(element => {
//         console.log(`Elements: ${element.children.length}`);
//     });
// }
// itemsCount()