//? Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

//? <div id="controls">
//?   <input type="number" min="1" max="100" step="1" />
//?   <button type="button" data-create>Create</button>
//?   <button type="button" data-destroy>Destroy</button>
//? </div>

//? <div id="boxes"></div>

//? Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

//? 1.Размеры самого первого <div> - 30px на 30px.
//? 2.Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
//? 3.Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.

const inputNumber = document.querySelector('#controls>input');
const btnCreateEl = document.querySelector('button[data-create]');
const btnDestroyEl = document.querySelector('button[data-destroy]');
const newAddDiv = document.querySelector('#boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const arrayCollectionElement = [];
let sizeDiv = 30;
let marginDiv = 10;

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const div = document.createElement('div');
    div.style.width = `${sizeDiv}px`;
    div.style.height = `${sizeDiv}px`;
    div.style.marginBottom = `${marginDiv}px`;
    sizeDiv += 10;
    div.style.backgroundColor = getRandomHexColor();
    arrayCollectionElement.push(div);
  }
  return arrayCollectionElement;
}

function destroyBoxes() {
  newAddDiv.innerHTML = '';
}

btnCreateEl.addEventListener('click', () => {
  let divToAdd = createBoxes(inputNumber.value);
  newAddDiv.append(...divToAdd);
});

console.log(inputNumber.value);

btnDestroyEl.addEventListener('click', () => {
  document.location.reload();
});
