'use strict'
/*
  Ознакомьтесь с HTML и CSS.
  
  Есть меню навигации, необходимо написать скрипт, который
  при клике на пункт меню добавит ему класс active,
  таким образом выделив текущую (активную) ссылку,
  при этом убрав его у всех остальных элементов меню.
  
  Пунктов меню может быть произвольное количество, используйте
  прием делегирование событий. Учтите клик по самому ul, его
  необходимо игнорировать.
  
  При клике по ссылкам не должна перезагружаться страница!
*/
const refs = {
  lists : document.querySelector('.menu'),
};

const handleAddClass = ({target}) => {
  if (target.nodeName !== 'A') return;
  const currentActiveLink = document.querySelector('.menu .active');
  currentActiveLink.classList.remove('active');
  target.classList.add('active');
};

refs.lists.addEventListener('click', handleAddClass);