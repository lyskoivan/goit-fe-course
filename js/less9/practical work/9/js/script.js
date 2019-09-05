'use strict'
/*
  На вкладках HTML и CSS уже готовая верстка модального окна.
  По умолчанию модальное окно скрыто классом modal-hidden.
  
  Напишите скрипт который реализует следующее поведение:
 
  - При клике на кнопке с надписью "Open Modal", модальное окно с классом modal, 
    должно появляться. Для этого необходимо убрать класс modal-hidden. 
    Для выбора модального модального окна используйте класс js-modal-backdrop
 
  - При открытом модальном окне, клик на кнопку с крестиком (data-action="close-modal")
    или на серый фон с прозрачностью (js-modal-backdrop), модальное окно должно закрываться.
*/
const refs = {
  modal : document.querySelector('.js-modal-backdrop'),
  modalButton : document.querySelector('.btn'),
  closeModal : document.querySelector('.modal-content div[data-action="close-modal"]'),
};

const hideModalClick = ({target}) => {
  refs.modal.classList.add('modal-hidden');
};
const hideModal = ({target}) => {
  if (target !== refs.modal) return;
  hideModalClick(target);
};

const handleShowModal = () => {
  refs.modal.classList.remove('modal-hidden');
};

refs.modalButton.addEventListener('click', handleShowModal);
refs.closeModal.addEventListener('click', hideModalClick);
refs.modal.addEventListener('click', hideModal);