const employees = [
  {
    name: "Иван Иванов",
    position: "Разработчик",
    salary: 4000,
    isActive: true
  },
  {
    name: "Мария Петрова",
    position: "Менеджер",
    salary: 2000,
    isActive: false
  },
  {
    name: "Сергей Сидоров",
    position: "Аналитик",
    salary: 4000,
    isActive: true
  },
  {
    name: "Анна Смирнова",
    position: "Разработчик",
    salary: 3000,
    isActive: true
  },
];

// Добавить нового сотрудника. Напишите функцию addEmployee, которая добавляет нового сотрудника в массив. Проверяйте, чтобы поля объекта имели корректные типы данных.

function addEmployee(newEmployee) {
  if(
    newEmployee.name !== "" &&
    newEmployee.position !== "" &&
    newEmployee.salary > 0 &&
    newEmployee.isActive === true
  ) {
    employees.push(newEmployee);
    console.log(employees[4])
  } else {
    console.log("Ошибка входных данных");
  }
  // logic here
}

// addEmployee({
//   name: "Евгений Кузнецов",
//   position: "Разработчик",
//   salary: 3000,
//   isActive: true
// });

// Удалить сотрудника по имени. Напишите функцию removeEmployee, которая удаляет сотрудника из массива по его имени.
function removeEmployee(name) {
  const currentEmployeeIndex = employees.findIndex((employee) => employee.name === name);
  employees.splice(currentEmployeeIndex, 1);

  // filter
};

// removeEmployee("Мария Петрова");

// Посчитать среднюю зарплату активных сотрудников. Напишите функцию calculateAverageSalary, которая возвращает среднюю зарплату только тех сотрудников, у которых isActive: true.

function calculateAverageSalary(employees) {
  // вытащить всех активных сотрудников
  const activeEmployees = employees.filter((employee) => employee.isActive === true);
  // посчитать все их зарплаты

  // const totalSalary = activeEmployees.reduce((acc, employee) => {
  //   return acc + employee.salary;
  // }, 0);

  const totalSalary = activeEmployees.reduce((acc, employee) => acc + employee.salary, 0);
  // посчитать среднюю
  const averageSalary = totalSalary / activeEmployees.length

  return Math.ceil(averageSalary.toFixed(2));

  // Math.ceil() -
  // Math.round() +
};

// calculateAverageSalary(employees);

// Список сотрудников по должности. Напишите функцию filterByPosition, которая принимает название должности и возвращает список всех сотрудников с этой должностью.

function filterByPosition(position) {
  const filteredEmployees = employees.filter((employee) => employee.position === position)
  console.log(filteredEmployees[0].name)
};

// filterByPosition("Менеджер");

// Вывести имена сотрудников, чья зарплата выше среднего. Напишите функцию highEarners, которая возвращает массив имен сотрудников с зарплатой выше средней.

function highEarners() {
  // вытащить среднюю зарплату
  const totalSalary = calculateAverageSalary(employees);
  // отфильтровать сотрудников, чья зарплата выше среднего
  const filteredEmployees = employees.filter((employee) => employee.salary > totalSalary)
  console.log(totalSalary, filteredEmployees[0].salary, filteredEmployees[1].salary);
};

// highEarners();

// Повысить зарплату всем активным сотрудникам. Напишите функцию increaseSalaries, которая увеличивает зарплату всех активных сотрудников на определённый процент.

function increaseSalaries(percent) {
  employees.forEach((employee) => {
    if(employee.isActive === true) {
      employee.salary += employee.salary * (percent / 100)
    }
  })
  console.log(employees[3]);
};

increaseSalaries(50);

// Вывести данные сотрудников в человеко-читаемом виде. Напишите функцию printEmployees, которая выводит информацию о сотрудниках в формате:
// "Имя: Иван Иванов, Должность: Разработчик, Зарплата: 1500, Активен: Да"

// Сгруппируйте по должности и выведите в консоль
// [
//   {
//     position: 'Разрабочик',
//     quantity: 2,
//     employees: [
//       {

//       },
//       {

//       }
//     ]

//   },
//   {
//     position: 'Менеджер',
//     quantity: 1,
//     employees: [
//       {

//       }
//     ]
//   }
// ]
