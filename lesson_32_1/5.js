// 5. Полиморфизм
// Класс "Звук животных"
// Создайте базовый класс Animal с методом makeSound().
// Создайте подклассы:
// Dog – выводит "Гав!".
// Cat – выводит "Мяу!".
// Cow – выводит "Муу!".
// Создайте массив объектов этих классов и вызовите
// метод makeSound() для каждого из них, используя цикл.

// Класс "Оплата"
// Создайте базовый класс Payment с методом process().
// Реализуйте подклассы:
// CreditCardPayment – обрабатывает платеж через кредитную карту.
// PayPalPayment – обрабатывает платеж через PayPal.
// Вызовите метод process() для объектов каждого класса
// через один массив.

// Класс фигура
// move() - фигура ходит
// 3 наследования - любые
// переопределяем метод move(), ходит согласно правилам

class Piece {
  constructor(name) {
    this.name = name;
  };

  move() {
    console.log('Фигура ходит')
  };
};

class Bishop extends Piece {
  constructor(name) {
    super(name);
  };

  move() {
    console.log("Слон ходит по диагонали")
  };
};

class Knight extends Piece {
  constructor(name) {
    super(name);
  };

  move() {
    console.log("Конь ходит буквой G")
  };
};

class King extends Piece {
  constructor(name) {
    super(name);
  };

  move() {
    console.log("Ферзь ходит куда хочет")
  };
};

const pieces = [new Bishop('Слон'), new Knight('Конь'), new King('Ферзь')]
pieces.forEach(piece => piece.move());
