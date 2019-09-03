'use strict'
/*
  Есть список с классом .size-filter из произвольного 
  количества чекбоксов, каждый из которых содержит 
  размер одежды в фильтре.
  
  Напишите функцию collectInputData(inputs), которая
  принимает 1 параметр inputs - массив тех инпутов
  у которых состояние checked.
  
  Возвращает массив значений атрибута value.
*/
const sizeInputs = document.querySelectorAll('.size-filter input');
const checkedInputsArr = [...sizeInputs];
const checkedInputs = checkedInputsArr.filter(elm => elm.hasAttribute('checked'));

const collectInputData = inputs => inputs.map(elm => elm.getAttribute('value'));
console.log(collectInputData(checkedInputs));