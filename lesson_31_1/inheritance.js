class Weapon {
  constructor(name, cost, weight) {
    this.name = name;
    this.cost = cost;
    this.weight = weight;
  }

  attack() {
    console.log(`${this.name} Аттакует`)
  };

  howMuch() {
    console.log(`${this.name} стоит - ${this.cost}`)
  };
};

class Knife extends Weapon {
  constructor(name, cost, weight, typeOfSteel) {
    super(name, cost, weight);
    this.type = typeOfSteel;
  };

  cut() {
    console.log(`${this.name} режет`);
  }
};

class Rifle extends Weapon {
  constructor(name, cost, weight, cartridge) {
    super(name, cost, weight);
    this.cartridge = cartridge;
  };

  whichCartridge() {
    console.log(`${this.name} стреляет ${this.cartridge} патронами`);
  }
};

const knife = new Knife("M9 Bayonet", 4000, 5, "Сталь");
// console.log(knife.name);
// knife.cut();


const rifle = new Rifle('M4A4', 10000, 20, 'Холостые');
// rifle.whichCartridge();
