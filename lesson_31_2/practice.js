// 1 Создать класс User
// login, password, email, phone
// 2 Сделать пароль недоступным
// для просмотра поле
// 3 Реализовать смену пароля
// 4 Наследоваться от класса User
// и сделать класс Admin
// 5 Реализовать у User, метод getUserList
// выкинуть ошибку если он User, а если
// админ то вернуть true

// throw new Error('ошибка ...');

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

  getUserList() {
    throw new Error('У вас нет прав!');
  };
};

class Admin extends User {
  constructor(login, password, email, phone) {
    super(login, password, email, phone);
  };

  getUserList() {
    console.log(true);
  };
};

const user1 = new User(
  'scissxrd',
  '123456',
  'scissxrd@gmail.com',
  '77762643168',
);

user1.changePassword('654321');
user1.getUserList();
console.log(user1);

const admin1 = new Admin(
  'scissxrd',
  '123456',
  'scissxrd@gmail.com',
  '77762643168',
);

admin1.changePassword('782436872364');
console.log(admin1);
admin1.getUserList();