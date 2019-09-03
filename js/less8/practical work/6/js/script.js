'use strict'
/*
  Создайте функцию createMovieCard(), которая 
  создает и возвращает DOM-узел карточки кинофильма.
  
  Разметка с классами есть на вкладке HTML.
  Стили на вкладке CSS.
  
  Используйте createElement для создания узлов.
  Добавьте классы и атрибуты.
*/
const createMovieCard = () => {
  const cardDiv = document.createElement('div');
  cardDiv.classList.add('movie');

  const cardMainImg = document.createElement('img');
  cardMainImg.classList.add('movie__image');
  cardMainImg.setAttribute('src', 'http://image.tmdb.org/t/p/w500/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg');
  
  const cardDivWrapper = document.createElement('div');
  cardDivWrapper.classList.add('movie__body');  

  const cardTitle = document.createElement('h2');
  cardTitle.classList.add('movie__title');
  cardTitle.textContent = 'The Godfather';

  const cardDescription = document.createElement('p');
  cardDescription.classList.add('movie__description');
  cardDescription.textContent = 'Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the';

  const cardDate = document.createElement('p');
  cardDate.classList.add('movie__date');
  cardDate.textContent = 'Released: 1972-03-14';

  const cardRating = document.createElement('p');
  cardRating.classList.add('movie__rating');
  cardRating.textContent = 'Rating: 8.6'

  cardDiv.append(cardMainImg, cardDivWrapper);
  cardDivWrapper.append(cardTitle, cardDescription, cardDate, cardRating);
  return cardDiv;
};
const body = document.querySelector('body');
body.prepend(createMovieCard());