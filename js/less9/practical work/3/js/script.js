'use strict'
/*
  Есть счетчик (спан) и кнопки +1, -1, которые должны увеличивать и уменьшать значение счетчика на 1. 
  
  - Создайте класс Counter, который хранит одно поле value - текущее значение счетчика
  - Класс принимает один параметр - onChange, функцию для обновления интерфейса при изменении счетчика
  - Добавьте классу методы increment и decrement для увеличения и ументшение значения счетчика
  - Привяжите вызовы методов и значение счетчика к раметке
*/
let counter = 0;
const refs = {
  buttonUp: document.querySelector('.btn[data-action="add"]'),
  buttonDown: document.querySelector('.btn[data-action="sub"]'),
  valueSpan:  document.querySelector('.value'),
};

const handleButtonUp = () => {
  counter += 1;
  refs.valueSpan.textContent = counter;
};

const handleButtonDown = () => {
  counter -= 1;
  refs.valueSpan.textContent = counter;

};
refs.buttonUp.addEventListener('click', handleButtonUp);
refs.buttonDown.addEventListener('click', handleButtonDown);