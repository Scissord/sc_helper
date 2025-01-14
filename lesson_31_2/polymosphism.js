class Vehicle {
  constructor(name) {
    this.name = name;
  };

  move() {
    console.log(`${this.name} движется`)
  };
};

class Car extends Vehicle {
  constructor(name) {
    super(name);
  };

  move() {
    console.log(`${this.name} едет`);
  };
};

class Ship extends Vehicle {
  constructor(name) {
    super(name);
  };

  move() {
    console.log(`${this.name} плывет`);
  };
};

class Airplane extends Vehicle {
  constructor(name) {
    super(name);
  };

  move() {
    console.log(`${this.name} летит`);
  };
};

const car = new Car('huyndai sonata');
const ship = new Ship('моторная лодка');
const airplane = new Airplane('boeing 747');

const vehicles = [car, ship, airplane]

vehicles.forEach(vehicle => vehicle.move())
