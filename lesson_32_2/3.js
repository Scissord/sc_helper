// 3. Абстрактные классы
// Задание:
// Создайте абстрактный класс Employee с методом calculateSalary().
// Создайте классы Manager и Developer,
// которые наследуют Employee и реализуют
// метод calculateSalary() по-разному:
// У менеджера фиксированная зарплата.
// У разработчика зарплата зависит от количества часов.
// Создайте экземпляры обоих классов и рассчитайте зарплаты.

class Employee {
  calculateSalary() {
    throw new Error('Выберите должность работника!');
  };
};

class Manager extends Employee {
  calculateSalary() {
    console.log('Ваша зарплата 300.000');
  };
};

class Developer extends Employee {
  #per_hour = 5000;

  calculateSalary(hours) {
    const salary = hours * this.#per_hour;
    console.log(salary);
  };
};

const manager = new Manager();
manager.calculateSalary();

const developer = new Developer();
developer.calculateSalary(50);

// Класс "Учетная запись"
// Создайте абстрактный класс Account с методами:
// login(username, password) – абстрактный метод.
// logout() – абстрактный метод.
// Создайте классы:
// AdminAccount, который требует супер-прав для входа.
// UserAccount, который требует простой вход с паролем.
// Реализуйте различное поведение для login() в каждом классе.