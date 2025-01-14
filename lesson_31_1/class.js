class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  speak() {
    console.log(`${this.name} издает звук.`);
  }

  howOld() {
    console.log(`Возраст ${this.name}(-а) - ${this.age}`)
  }
}

const animal = new Animal("Лев", 5);
const animal2 = new Animal("Жираф", 30);
animal.howOld();
animal2.howOld();