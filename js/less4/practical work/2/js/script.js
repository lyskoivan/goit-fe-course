'use strict'
/*  
  Напиши скрипт, который, для объекта user, последовательно: 
  
    - добавляет поле mood со значением 'happy'
    
    - заменяет значение hobby на 'javascript'
    
    - заменяет значение premium на false
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя Object.keys и for...of
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя Object.entries и for...of
*/

const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true
};
user.mood = 'happy';
user.hobby = 'javascript';
user['premium'] = false;
const getUserKeys = function () {
  let i = 0;
  const keys = Object.keys(user);
  for (const key of keys) {
    console.log(keys[i] + ': ' + user[key]);
    i += 1;
  }
}
const getUserEntries = function () {
  const entries = Object.entries(user);
  for (const entrie of entries) {
    const first = entrie[0];
    const second = entrie[1];
    console.log(`${first}: ${second}`);
  }
}
getUserKeys();
getUserEntries();