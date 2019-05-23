'use strict'
const credits = 23580;
const pricePerDroid = 3000;
let number  = prompt();
console.log (number);
if (number === null) {
    alert ('Отменено пользователем!');
}
else {
    number = Number(number);
    const totalPrice = pricePerDroid * number;
        if (totalPrice > credits) {
            alert ('Недостаточно средств на счету!');
        }
        else {
            let residue = credits - totalPrice;
            const message = `Вы купили ${number} дроидов, на счету осталось ${residue} кредитов.`;
            alert (message);
        }
}