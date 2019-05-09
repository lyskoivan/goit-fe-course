'use strict'
const userInput = prompt('Введите число');
const parsedUserInput = Number(userInput);
if ( Number.isNaN(parsedUserInput) === true ){
    console.log ('Ввели нечисло');
}
else {
    console.log ('Ввели число')
}