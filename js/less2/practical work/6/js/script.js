'use strict'
/*
  Напиши скрипт, который проверяет произвольную строку 
  в переменной message и находит в ней самое длинное слово,
  записывая его в переменную longestWord.
*/

const message = "May the force be with you";
const messageArr = message.split(' ');
let longestWord = messageArr[0];
for (let i = 1; messageArr.length > i; i += 1) {
    if ( longestWord.length < messageArr[i].length ) {
        longestWord = messageArr[i];
    }
}
console.log(longestWord); // 'force'
