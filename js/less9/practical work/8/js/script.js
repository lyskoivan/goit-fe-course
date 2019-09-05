'use strict'
/*
  Напишите скрипт который:
    
    - При фокусе текстового поля, в p.message рендерит строку "Input is in focus!"
    - При наборе текста в инпуте (событие input), текущее его значение должно 
      отображаться в p.input-value 
*/
const refs = {
  result : document.querySelector('.input-value'),
  focusInput : document.querySelector('.input-value'),
  input : document.querySelector('.input'),
};

const handleResultFocus = () => {
  refs.focusInput.textContent = "Input is in focus!"
};

const handleResult = ({target}) => {
  refs.result.textContent = `Current input value: ${target.value}`;
};

refs.input.addEventListener('focus', handleResultFocus);
refs.input.addEventListener('input', handleResult);