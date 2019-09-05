'use strict'
/*
  Напишите скрипт который реализует следующий функционал.
  
  Есть кнопка с классом button, текст которой отображает 
  кол-во раз которое по ней кликнули, обновляется при каждом клике.
*/
const refs = {
  button: document.querySelector('.button'),
};
let buttonCouter = 0;
const handleButtonClick = () => {
  buttonCouter += 1;
  refs.button.textContent = buttonCouter;
  
};
refs.button.addEventListener('click', handleButtonClick);