// 1. Классы и объекты
// Задание:
// Создайте класс User, который содержит:
// Поля name и age.
// Метод sayHello(), который выводит в консоль:
// "Привет, меня зовут {name} и мне {age} лет.".
// Создайте несколько объектов этого класса и
// вызовите метод sayHello().

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  };

  sayHello() {
    console.log(`Привет, меня зовут ${this.name} и мне ${this.age} лет.`);
  };
};

const user = new User('Виталик', 27);
user.sayHello();
const user2 = new User('Диас', 18);
user2.sayHello();

// Задание:
// Создайте класс Product, который содержит:
// Поля title, rating, price.
// Метод discount(), который выводит в консоль:
// "{title} ({rating}), можно купить за price - 50%".
// Создайте несколько объектов этого класса и
// вызовите метод discount().

class Product {
  constructor(title, rating, price) {
    this.title = title;
    this.rating = rating;
    this.price = price;
  };

  discount() {
    console.log(
      `
        ${this.title} (${this.rating}), 
        можно купить за - ${this.price / 2}
      `)
  };
};

const product = new Product('Памада', 4.83, 7000);
product.discount();
