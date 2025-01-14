// 4. Инкапсуляция
// Класс "Игрок"
// name – имя игрока.
// Создайте класс Player с приватными полями:
// #score – очки игрока.
// Добавьте методы:
// addScore(points) – увеличивает очки.
// resetScore() – сбрасывает очки.
// getScore() – возвращает текущие очки.
// Протестируйте методы, не давая прямого доступа к #score.

class Player {
  #score = 0;

  constructor(name, score) {
    this.name = name;
    if (score) {
      this.#score = score;
    };
  };

  add(points) {
    if (points > 0) {
      this.#score += points;
    };
  };

  reset() {
    this.#score = 0;
  };

  get() {
    return this.#score;
  };
};

const player = new Player('Игрок 1', 100);

player.add(20);
player.reset();

const score = player.get();
console.log(score);

// здесь была идея чтобы в зависимости от должности выдавать зп
// Класс "Персонал"
// Создайте базовый класс Staff с полями:
// name – имя сотрудника.
// position – должность.
// Создайте подклассы:
// Manager – добавьте поле department.
// Engineer – добавьте поле specialty.
// Добавьте приватное поле _salary в базовый класс и
// реализуйте методы:
// setSalary(amount) – устанавливает зарплату.
// getSalary() – возвращает зарплату.
// Создайте объекты Manager и Engineer с разными
// зарплатами и должностями.