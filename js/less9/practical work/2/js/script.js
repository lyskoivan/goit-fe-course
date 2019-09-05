'use strict'
/*
  Даны 2 инпута, абзац и кнопка. По нажатию на кнопку 
  получите числа которые бьудут введены в инпуты и запишите их сумму в span.result.
*/
const refs = {
  button: document.querySelector('button'),
  input: document.querySelectorAll('input'),
  result: document.querySelector('.result'),
};

const handleButtonResult = () => {
  const firstInput = Number(refs.input[0].value);
  const secondInput = Number(refs.input[1].value);
  const result = firstInput + secondInput;
  
  if (isNaN(result)) {
    refs.result.textContent = 'erorr';
    return;
  }
  refs.result.textContent = result;
};

refs.button.addEventListener('click', handleButtonResult);