'use strict'
/*
* Добавь классу Car свойство цены автомобиля, назови его сам.
* Добавь геттер и сеттер value, который будет работать с свойством цены автомобиля.
*/
class Car {
  constructor({ maxSpeed = 0, price = 0 }) {
    this.speed = 0;
    this.maxSpeed = maxSpeed;
    this.running = false;
    this.distance = 0;
    this.price = price;
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
  }

  decelerate(spd) {
    if(spd > this.maxSpeed || spd < 0) return;
    this.speed = spd;
  }

  drive(hours) {
    if(!this.running) return;
    this.distance = hours * this.speed;
  }
  get value() {
    return this.price;
  }
  set value(val) {
    this.price = val;
    return this.price;
  }
  getSpecs(object) {
    console.log(`maxSpeed: ${object.maxSpeed}, speed: ${object.speed}, running: ${object.running}, distance: ${object.distance}`)
  }
}

const car = new Car({ maxSpeed: 50, price: 2000 });
console.log(car.value); // 2000

car.value = 4000;
console.log(car.value); // 4000
