'use strict'
let countryName = prompt('Введите вашу страну').toLowerCase();
let  shippingCost;
switch (countryName) {
    case 'китай':
        shippingCost = 100;
        break;
    case 'южная америка':
        shippingCost = 250;
        break;
    case 'австралия':
        shippingCost = 170;
        break;
    case 'индия':
        shippingCost = 80;
        break;
    case 'ямайка':
        shippingCost = 120;    
        break;
    default:
        alert('В вашей стране доставка не доступна.');
}
if ( shippingCost === undefined ) {
    console.log(NaN)
}
else {
    const message = `Доставка в ${countryName} будет стоить ${shippingCost} кредитов`;
    alert(message); 
}
