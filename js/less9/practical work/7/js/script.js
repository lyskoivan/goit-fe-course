'use strict'
/*
  Дан набор инпутов. Сделайте так, чтобы при потере фокуса все 
  инпуты проверяли свое содержимое на правильное количество символов. 
  
  - Сколько символов должно быть в инпуте, указывается в атрибуте data-length. 
  - Если введено подходящее количество, то outline инпута становится зеленым, 
    если неправильное - красным. Для добавления стилей, на вкладке CSS есть стили valid и invalid
*/
const refs = {
  inputWrapper : document.querySelector('.input-list'),
};

const handleFocusColor = ({target}) => {
  const correctLength = +target.dataset.length;
  const currentLength = target.value.length;
  if (correctLength !== currentLength) {
    target.classList.add('invalid');
    return;
  }
  target.classList.toggle('invalid')
  target.classList.add('valid');
};

refs.inputWrapper.addEventListener('change', handleFocusColor);