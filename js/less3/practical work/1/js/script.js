'use strict'
/*
  Напиши функцию checkNumberType(num)
  
  Функция получает число num как аргумент и возвращает 
  строку "Even" если число четное и строку "Odd" если не четное.
*/

const checkNumberType = function (num) {
    if (num % 2 === 0) {
        return 'Even';
    }
    else {
        return 'Odd';
    }
};
// Вызовы функции для проверки
console.log( checkNumberType(2) ); // 'Even'

console.log( checkNumberType(46) ); // 'Even'

console.log( checkNumberType(3) ); // 'Odd'

console.log( checkNumberType(17) ); // 'Odd'