class Weapon {
  constructor(name) {
    this.name = name;
  };

  attack() {
    console.log(this.name, 'аттакует');
  };
};

const weapon = new Weapon('BAZOKA');
console.log(weapon.name);
weapon.attack();

class Knife extends Weapon {
  constructor(name, typeOfSteel) {
    super(name);
    this.type = typeOfSteel;
  };

  whichType() {
    console.log(`Тип лезвия - ${this.type}`);
  };
};

const knife = new Knife('M9 BAYONET', 'Сталь');
// console.log(knife.name);
knife.attack();
knife.whichType();

class Rifle extends Weapon {
  constructor(name, typeOfPatrons) {
    super(name);
    this.type = typeOfPatrons;
  };

  shoot() {
    console.log(
      'Винтовка',
      this.name,
      'стреляет',
      this.type,
      'патронами');
  };
};

const rifle = new Rifle(
  'M4A4',
  'холостыми'
);
rifle.shoot();