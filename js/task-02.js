//? В HTML есть пустой список ul#ingredients.
//?  <ul id="ingredients"></ul>

//? В JavaScript есть массив строк.
//? const ingredients = [
//?   "Potatoes",
//?   "Mushrooms",
//?   "Garlic",
//?   "Tomatos",
//?   "Herbs",
//?   "Condiments",
//? ];

//? Напиши скрипт, который для каждого элемента массива ingredients:

//? Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
//? Добавит название ингредиента как его текстовое содержимое.
//? Добавит элементу класс item.
//? После чего вставит все <li> за одну операцию в список ul#ingredients.

// =================================================================================================

const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsEl = document.querySelector('#ingredients');

console.log(ingredientsEl);
function createIngredientsEl() {
  const ingredientsList = ingredients.map(element => {
    const list = document.createElement('li');
    list.className = 'item';
    list.textContent = element;
    return list;
  });
  return ingredientsEl.append(...ingredientsList);
}
createIngredientsEl();
