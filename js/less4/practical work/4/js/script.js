'use strict'
/*
* Есть два массива names и prices с именами и ценами товаров.
* Напишите функцию combine(names, prices), которая получает 
* эти два массива и возвращает массив объектов со свойствами name и price. 
*/

const names = ['Радар', 'Сканер', 'Дроид', 'Захват', 'Двигатель', 'Топливный бак'];
const prices = [1000, 2000, 1500, 2700, 1600, 8000];
const combine = function (arr, arrSecond) {
  let totalArr = [];
  console.log(arr);
  for (let i = 0; i < arr.length; i += 1) {
    const concatObj = {
      names: arr[i],
      prices: arrSecond[i],
    };
    totalArr.push(concatObj);
  }
  return totalArr;
};
const products = combine(names, prices);
console.log(products); // массив объектов со свойствами name и price
