// В HTML есть список категорий ul#categories.
// Напиши скрипт который:

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента
//(тега < h2 >) и количество элементов в категории(всех вложенных в него < li >).

// В результате, в консоли будут выведены такие сообщения:

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

const categoriesSum = document.querySelector('#categories');
function summaryItems() {
  const list = categoriesSum.querySelectorAll('.item');
  console.log('Number of categories:', list.length);

  list.forEach(el => {
    console.log('Category:', el.firstElementChild.textContent);
    console.log('Elements:', el.querySelectorAll('li').length);
  });
}

summaryItems();
