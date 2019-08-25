'use strict'
let input;
const numbers = [];
let total = 0;

do {
    input = prompt('Введите число');
    const num = Number(input);
    if (!isNaN(num)) {
        numbers.push(num);
    }
    else {
        alert('Было введено не число, попробуйте еще раз');
    }
}
while (input !== null);

for (const value of numbers) {
    total +=  value;
}
console.log(`Общая сумма чисел равна ${total}`);