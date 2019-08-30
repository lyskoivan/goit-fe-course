'use strict'
/*
  Напиши функцию getTotal(products, order), где 
  products - объект со свойствами "имя продукта":"цена за единицу"
  order - объект со свойствами "имя продукта":"количество единиц".
  
  Функция возвращает общую сумму стоимости всех продуктов заказа.
  
  Используй метод reduce.
*/
const getTotal = (products, order) => {
  const orderKeys = Object.keys(order);
  const totalOrder = orderKeys.reduce((totalPrice, value) => totalPrice += order[value] * products[value], 0);
  return totalOrder;
};

const products = {
  bread: 10,
  milk: 15,
  apples: 20,
  cheese: 30,
  chicken: 40
};

const orderA = {
  bread: 2,
  apples: 4,
  chicken: 1
};

const orderB = {
  bread: 1,
  milk: 2,
  cheese: 2,
  apples: 1
};

const orderC = {
  bread: 2,
  cheese: 2
};
// Вызовы функции для проверки
console.log(getTotal(products, orderA)); // 140
console.log(getTotal(products, orderB)); // 120
console.log(getTotal(products, orderC)); // 80

// Вызовы функции для проверки
// const customer = new getTotal(products, orderA);
// const customer2 = new getTotal(products, orderB);
// const customer3 = new getTotal(products, orderC);
// console.log(customer); // 140
// console.log(customer2); // 120
// console.log(customer3); // 80
