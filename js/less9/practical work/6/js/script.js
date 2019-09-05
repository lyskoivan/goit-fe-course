'use strict'
/*
  Дан ul, а внутри него произвольное количество li с текстом и кнопкой. 
  Сделайте так, чтобы по нажатию на кнопку, удалялся тот li в котором
  она находится. Обязательно используйте делегирование событий.
*/
const refs = {
  list : document.querySelector('.list'),
};

const handleDeleteList = event => {
  const target = event.target;
  if (target.nodeName !== "BUTTON") return;
  target.parentNode.remove();
};

refs.list.addEventListener('click', handleDeleteList);