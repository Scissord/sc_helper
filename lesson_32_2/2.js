// 2. Наследование
// Класс "Животные"
// Создайте базовый класс Animal с полями:
// name – имя животного.
// age – возраст животного.
// Добавьте метод eat(), который выводит
// сообщение "Животное ест".
// Создайте подклассы:
// Bird – добавьте поле canFly (может ли птица летать)
// и переопределите метод eat() для вывода "Птица клюет зерно".
// Fish – добавьте поле canSwim (может ли рыба плавать)
// и переопределите метод eat() для вывода "Рыба ест планктон".

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  };

  eat() {
    console.log('Животное ест')
  };
};

class Bird extends Animal {
  constructor(name, age) {
    super(name, age);
    this.canFly = true;
  };

  eat() {
    console.log('Птица клюет зерно')
  };
};

class Fish extends Animal {
  constructor(name, age) {
    super(name, age);
    this.canSwim = true;
  };

  eat() {
    console.log('Рыба ест планктон')
  };
};

const bird = new Bird('Дятел', 2);
const fish = new Fish('Щука', 3);

bird.eat();
fish.eat();

// Класс "Персонажи игры" Создайте базовый
// класс Character с полями:
// name – имя персонажа.
// health – здоровье.
// Создайте подклассы:
// Warrior – добавьте поле weapon.
// Mage – добавьте поле mana.
// Реализуйте метод attack() в базовом классе
// и переопределите его в подклассах для вывода
// различного поведения.
// mana - 100
// - 20
// маг не может атаковать

class Character {
  constructor(name, health) {
    this.name = name;
    this.health = health;
  };

  attack() {
    console.log('Персонаж аттакует');
  };
};

class Warrior extends Character {
  constructor(name, health, weapon) {
    super(name, health);
    this.weapon = weapon;
  };

  attack() {
    console.log(`Воин аттакует при помощи ${this.weapon}`);
  };
};

class Mage extends Character {
  constructor(name, health, mana) {
    super(name, health);
    if (mana) {
      this.mana = mana;
    } else {
      this.mana = 100;
    };
  };

  attack() {
    if (this.mana >= 20) {
      this.mana -= 20;
      console.log(`Маг кастует заклинание, ${this.mana}`);
    } else {
      console.log('Недостаточно маны!')
    }
  };
};

const warrior = new Warrior('Августин', 100, '3 топоров');
const mage = new Mage('Гендальф', 100);

warrior.attack();

mage.attack();
mage.attack();
mage.attack();
mage.attack();
mage.attack();

mage.attack();