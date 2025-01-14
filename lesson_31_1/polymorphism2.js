class Vehicle {
  constructor(name) {
    this.name = name;
  };

  move() {
    console.log(`${this.name} двигается`);
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

const vehicles = [new Car('hyundai sonata'), new Ship('моторная'), new Airplane('boeing 747')];
vehicles.forEach(vehicle => vehicle.move());
