'use strict'
/*  
  Напиши фукнцию findLongestWord(str), которая принимает 
  параметром произвольную строку и возвращает самое длинное слово в этой строке.   
  
  Важное условие - в строке могут быть только пробелы, символы букв и цифр!
*/

const findLongestWord = function (str) {

const longestWordArray = str.split(' ');
let longestWord = longestWordArray[0];
for (let i = 1; longestWordArray.length > i; i += 1) {
  if (longestWord.length < longestWordArray[i].length) {
    longestWord = longestWordArray[i];
  }
}
return longestWord;
};
// Вызовы функции для проверки
console.log(
  findLongestWord("The quick brown fox jumped over the lazy dog")
); // 'jumped'

console.log(
  findLongestWord("Google do a roll")
); // 'Google'

console.log(
  findLongestWord("May the force be with you")
); // 'force'



