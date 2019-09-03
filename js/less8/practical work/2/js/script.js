'use strict'
/*
  Дан список с классом .list
	- Найдите первого потомка списка и сделайте его текст красного цвета
	- Найдите последнего потомка списка и сделайте его текст синего цвета
*/
const changeTextColor = (changeList, firstElmClass, lastElmClass) => {
  const getList = document.querySelector(changeList);
  const firstListElm = getList.firstElementChild;
  const lastListElm = getList.lastElementChild;
  firstListElm.classList.add(firstElmClass);
  lastListElm.classList.add(lastElmClass);
};
changeTextColor('.list', 'redText', 'blueText');