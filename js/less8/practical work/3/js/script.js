'use strict'
/*      
  Напиши функцию setGuestState(guests, period), где
  guests - массив гостей, period - кол-во дней после
  которого считается что гость не активен.
    
  Если значение поля inactiveDays болше чем period, 
  поставить для isActive значение false.
    
  Если же значение inactiveDays меньше чем period,
  поставить для isActive значение true
  
  PS: обязательно используй перебирающие методы массивов, никаких for!
*/

const guests = [
  { name: 'Mango', inactiveDays: 15, isActive: true },
  { name: 'Poly', inactiveDays: 8, isActive: false },
  { name: 'Ajax', inactiveDays: 32, isActive: false },
  { name: 'Chelsey', inactiveDays: 85, isActive: true }
];
const setGuestState = (guests, period) => {
  const guestsList = guests.map(guest => {
    guest.isActive = guest.inactiveDays > period ? false : true;
    return guest;
  });
  // const guestsList = guests.map(guest => {
  //   if (guest.inactiveDays > period) {
  //     guest.isActive = false;
  //     return guest;
  //   }
  //   guest.isActive = true;
  //   return guest;

  // });
  // for ( let i = 0, max = guestsList.length; max > i; i += 1 ) {
  //   guestsList[i].isActive = true;
  //   if (guestsList[i].inactiveDays > period) {
  //     guestsList[i].isActive = false;
  //   }
  // }
  return guestsList;
};


// Вызовы функции для проверки
console.table(
  setGuestState(guests, 10)
); // Объекты Mango, Ajax, Chelsey получат isActive false, а Poly наоборот true

console.table(
  setGuestState(guests, 20)
); // Объекты Ajax, Chelsey получат isActive false, а Mango и Poly наоборот true

console.table(
  setGuestState(guests, 50)
); // Объект Chelsey получит isActive false, а Mango, Poly и Ajax наоборот true