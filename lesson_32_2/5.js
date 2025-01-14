// 5. Полиморфизм
// Класс фигура
// move() - фигура ходит
// 3 наследования - любые
// переопределяем метод move(), ходит согласно правилам

class Piece {
  move() {
    console.log('Фигура ходит');
  };
};

class Bishop extends Piece {
  move() {
    console.log('Слон ходит по диагонали')
  };
};

class Knight extends Piece {
  move() {
    console.log('Конь ходит буквой Г');
  };
};

class Queen extends Piece {
  move() {
    console.log('Ферзь может ходить куда угодно')
  };
};

const pieces = [new Bishop(), new Knight(), new Queen()];
pieces.forEach(piece => piece.move());

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
