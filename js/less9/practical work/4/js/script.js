'use strict'
/*
  Есть форма с набором радиокнопок. Пользователь выбирает вариант ответа, 
  после чего нажимает кнопку "Submit" и происходит отправка формы.
  
  При отправке формы:
    - не должна перезагружаться страница
    - необходимо получить выбранную опцию и вывести в параграф с классом .result
*/

const refs = {
  form : document.querySelector('.question-form'),
  result : document.querySelector('.result'),
  inputs : document.querySelectorAll('.question-form input'),
};

const handleGetValue = event => {
  event.preventDefault();
  refs.result.innerHTML = 'Result: ';
  const inputsArr = [...refs.inputs];
  const findInput = inputsArr.find(({checked}) => checked === true);
  refs.result.textContent += `${findInput.parentNode.innerText}`;
};

refs.form.addEventListener('submit', handleGetValue);