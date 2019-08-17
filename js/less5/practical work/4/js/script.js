'use strict'
const Storage = function(items) {
  this.getItems = function() {
    return items;
  };
  this.addItem = function(item) {
    items.push(item);
  };
  this.removeItem = function(item) {
    const itemIndex = items.indexOf(item);
    items.splice(itemIndex, 1);
  };
};
const storage = new Storage([
  "Нанитоиды",
  "Пролонгер",
  "Железные жупи",
  "Антигравитатор"
]);

const items = storage.getItems();
console.log(items); 

storage.addItem("Дроид");
console.log(items);

storage.removeItem("Пролонгер");
console.log(items);
