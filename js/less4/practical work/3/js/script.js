'use strict'
/*
  Напиши скрипт который определит и выведет в консоль 
  имя сотрудника который выполнил больше всех задач.

  Сотрудники и кол-во выполненых задач содержатся 
  как свойства объекта в формате "имя":"кол-во задач"
*/

const tasksCompleted = {
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99
};
const getMostValue = function (object) {
  const keysArr = Object.keys(object);
  let largestValue = 0;
  for (const key of keysArr) {
    if (tasksCompleted[key] > largestValue) {
      largestValue = key;
    }
  }
  console.log(largestValue + ': ' + tasksCompleted[largestValue]);
}
getMostValue(tasksCompleted);