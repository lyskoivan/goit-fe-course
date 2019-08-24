'use strict'
/*
 * Напиши класс Car с указанными свойствами и методами
*/

class Car {
  constructor({ maxSpeed = 0 }) {
    this.speed = 0;
    this.maxSpeed = maxSpeed;
    this.running = false;
    this.distance = 0;
    /*
      Добавь свойства:
        - speed - для отслеживания текущей скорости, изначально 0.
        - maxSpeed - для хранения максимальной скорости 
        - running - для отслеживания заведен ли автомобиль, возможные значения true или false. Изначально false.
        - distance - содержит общий киллометраж, изначально с 0
    */
  }

  turnOn() {
    this.running = true;
  }

  turnOff() {
    this.running = false;
  }

  accelerate(spd) {
    if(spd > this.maxSpeed) return;
    this.speed = spd;
    // Записывает в поле speed полученное значение, при условии что
    // оно не больше чем значение свойства maxSpeed
  }

  decelerate(spd) {
    if(spd > this.maxSpeed || spd < 0) return;
    this.speed = spd;
    // Записывает в поле speed полученное значение, при условии что
    // оно не больше чем значение свойства maxSpeed и не меньше нуля
  }

  drive(hours) {
    if(!this.running) return;
    this.distance = hours * this.speed;
    // Добавляет в поле distance киллометраж (hours умноженное на значение поля speed),
    // но только в том случае если машина заведена!
  }
}

const car = new Car({ maxSpeed: 100 });

console.log(car);
car.accelerate(110);
console.log(car);
car.decelerate(101);
console.log(car);
car.drive(5);
console.log(car);


car.turnOn();

car.accelerate(80);
console.log(car);
car.decelerate(50);
console.log(car);
car.drive(10);
console.log(car);