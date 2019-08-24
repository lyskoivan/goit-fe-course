'use strict'
const Hero = function(name, xp, lvl) {
  this.name = name;
  this.xp = xp;
  this.lvl= lvl;
};

Hero.prototype.levelUp = function(lvl) {
  this.lvl += lvl;
  console.log(`${this.name} now have ${lvl} level`);
};

const Mage = function(name, xp, lvl, spells) {
  Hero.call(this, name, xp, lvl);
  this.spells = spells;
};
Mage.prototype = Object.create(Hero.prototype);
Mage.prototype.constructor = Mage;

Hero.prototype.getInfo = function() {
  console.log(`${this.name} have ${this.lvl} level`);
};
const human = new Mage('human', 100, 2, 'icebalast');
const mager = new Hero('mager', 50, 1,);
console.log(human);
console.log(mager);
mager.levelUp(1);
human.levelUp(1);
console.log(human);
console.log(mager);
console.dir(Hero);
console.dir(Mage);
mager.getInfo();
const Warrior = function(name, xp, lvl, weapon) {
  Hero.call(this, name, xp, lvl);
  this.weapon = weapon;
};
Warrior.prototype = Object.create(Hero.prototype);
Warrior.prototype.constructor = Warrior;