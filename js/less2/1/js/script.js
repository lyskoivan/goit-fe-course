'use strict'
let input;
const numbers = [];
let total = 0;

do {
    input = prompt('Введите число');
    if (Number.isNaN(Number(input)) === false) {
        numbers.push(input);
    }
    else {
        alert('Было введено не число, попробуйте еще раз');
    }
}
while (input !== null);
if (numbers.length === 0) {
    console.log(total);
}
else {
    for (const value of numbers) {
        total = Number(total)+Number(value);
      }
    console.log(`Общая сумма чисел равна ${total}`);
}
