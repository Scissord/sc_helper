// Создать класс пользователь
// У пользователя есть login, password,
// email, phone, is_admin = false;
// password - уникальное поле, нельзя
// взаимодействовать на прямую
// Метод, чтобы менять пароль
// (пользователь забыл пароль)
// Метод, is_admin === true ? ,
// console.log(Вы можете получить все данные)
// Создать Админа (Наследование),
// is_admin = true

// User
// Admin

class User {
  #password = '';

  constructor(login, password, email, phone) {
    this.login = login;
    this.#password = password;
    this.email = email;
    this.phone = phone;
  };

  changePassword(newPassword) {
    this.#password = newPassword;
  };
};

class Admin extends User {
  constructor(login, password, email, phone) {
    super(login, password, email, phone);
  };

  privilege() {
    console.log('Пользователь может всё!')
  };
}

const user1 = new User(
  'scissxrd',
  '123456',
  'scissxrd@gmail.com',
  '77762643168'
);

const admin1 = new Admin(
  'scissxrd',
  '123456',
  'scissxrd@gmail.com',
  '77762643168'
);

admin1.privilege();
// console.log(user1.#password); ошибка
