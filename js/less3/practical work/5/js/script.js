'use strict'
/*  
  Напиши функцию findLargestNumber(numbers), 
  которая получает массив чисел numbers, и возвращает 
  самое большое число в массиве.
*/
const findLargestNumber = function (numbers) {
  let largestNumber = numbers[0];
  for (let i = 1; numbers.length > i; i += 1) {
    if (largestNumber < numbers[i]) {
      largestNumber = numbers[i];
    }
  }
  return largestNumber;
};

// Вызовы функции для проверки
console.log(
  findLargestNumber([1, 2, 3])
); // 3

console.log(
  findLargestNumber([27, 12, 18, 5])
); // 27

console.log(
  findLargestNumber([31, 128, 14, 74])
); // 128
