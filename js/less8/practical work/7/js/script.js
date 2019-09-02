'use strict'
/*
* Напиши функцию getTotal(order), которая получает обьект заказа с продуктами и их ценой.
* Функция возвращает число - общую стоимость заказа.
* 
* Используй метод reduce.
*/
const getTotal = (order) => {
  const values = Object.values(order);
  const totalOrder = values.reduce((total, value) => value + total, 0);
  return totalOrder;
};

console.log(getTotal({ apples: 25, chicken: 60, milk: 15 })); // 100

console.log(getTotal({ bread: 10, apples: 25, milk: 15, cheese: 40 })); // 90

console.log(getTotal({ bread: 10, chicken: 60, cheese: 40 })); // 110
