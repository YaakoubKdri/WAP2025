'use strict'
function Animal(name, speed) {
    this.name = name;
    this.speed = speed;
  }
  
  Animal.prototype.run = function(increase) {
    this.speed += increase;
    console.log(`${this.name} runs at ${this.speed} km/h`);
  };
  
  Animal.compareBySpeed = function(a1, a2) {
    return a1.speed - a2.speed;
  };
  
  function Rabbit(name, speed) {
    Animal.call(this, name, speed);
  }

  Rabbit.prototype = Object.create(Animal.prototype);
  Rabbit.prototype.constructor = Rabbit;

  Rabbit.prototype.hide = function() {
    console.log(`${this.name} hides`);
  };
  
  const rabbit1 = new Rabbit("Arnob", 10);
  rabbit1.run(5);     
  rabbit1.hide();   
  
  const rabbit2 = new Rabbit("Fast_Arnob", 20);
  console.log(Animal.compareBySpeed(rabbit1, rabbit2));
  