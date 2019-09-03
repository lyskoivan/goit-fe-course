'use strict'
/*
  Дан ul склассом .list и массив строк. 
  
  Вставьте элементы этого массива в ul так, чтобы каждый элемент стоял в своем li.
*/


const elements = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];
const listElm = document.querySelector('.list');
const addArrTextInLi = arr => arr.map(elm => {
  const addlist = document.createElement('li');
  addlist.textContent = elm;
  return addlist;
});
listElm.append(...addArrTextInLi(elements));