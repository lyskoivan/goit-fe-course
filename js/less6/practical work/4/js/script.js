'use strict'
/*
* Добавь к классу Car из предыдущего задания статический
* метод getSpecs, который принимает объект-машину как параметр
* и выводит в консоль значения полей maxSpeed, speed, running и distance.
*/
class Car {
  constructor({ maxSpeed = 0 }) {
    this.speed = 0;
    this.maxSpeed = maxSpeed;
    this.running = false;
    this.distance = 0;
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
  getSpecs(object) {
    console.log(`maxSpeed: ${object.maxSpeed}, speed: ${object.speed}, running: ${object.running}, distance: ${object.distance}`)
  }
}


const car = new Car({ maxSpeed: 100 });
car.turnOn();
car.accelerate(50);
car.drive(2);

car.getSpecs(car); // maxSpeed: 100, speed: 50, running: true, distance: 100
