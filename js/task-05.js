//? Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка "Anonymous".

//? <input type="text" id="name-input" placeholder="Please enter your name" />
//? <h1>Hello, <span id="name-output">Anonymous</span>!</h1>
// ================================================================================================
const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', event => {
  console.log(input);
  if (event.currentTarget.value === '') {
    output.textContent = 'Anonymous';
  } else {
    output.textContent = event.currentTarget.value;
  }
});

console.log('input', input);
console.log('output', output);
