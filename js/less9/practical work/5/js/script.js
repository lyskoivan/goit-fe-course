'use strict'
/*
  Дан список изображений. Сделайте так, чтобы по клику на картинку 
  алертом выводился ее src. Обязательно используйте делегирование событий.
*/
const refs = {
  list : document.querySelector('.images'),
};
const handleImgClick = event => {
  const imgSource = event.target.currentSrc;
  alert(imgSource);
};
refs.list.addEventListener('click', handleImgClick)