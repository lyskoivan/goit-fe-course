'use strict'
/*
  Напиши функцию filterFromArray(arr), которая 
  объявляет 1 параметр, исходный массив arr.
  
  При вызове функции, первым аргументом всегда будет массив чисел,
  за которым следуют один или несколько аргументов, тоже чисел. 
  
  Функция возвращает новый массив, который содержит только 
  те элементы исходного массива, которые не совпадают 
  ни с одним из числовых аргументов.
*/

const filterFromArray = function(arr, ...secondArr) {
  const args = arr.concat(secondArr);
  const finalArr = [];
  for (let i = 0; i < args.length; i += 1) {
    if (!finalArr.includes(args[i])) {
      finalArr.push(args[i]);
    }
    else {
      const arrDelete = finalArr.indexOf(args[i]);
      finalArr.splice(arrDelete, 1);
    }
  }
  console.log(finalArr);
}; 

// Вызовы функции для проверки
  filterFromArray([1, 2, 3, 4, 5], 2, 4)
 // [1, 3, 5]


  filterFromArray([12, 4, 3, 8, 17], 3, 29, 18, 4)
 // [12, 8, 17]