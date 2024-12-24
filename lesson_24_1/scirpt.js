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
    salary: 2000,
    isActive: true
  },
];

// Добавить нового сотрудника. Напишите функцию addEmployee, которая добавляет нового сотрудника в массив. Проверяйте, чтобы поля объекта имели корректные типы данных.

function addEmployee(newEmployee) {
  if (
    typeof newEmployee.name === "string" &&
    typeof newEmployee.position === "string" &&
    typeof newEmployee.salary === "number" &&
    typeof newEmployee.isActive === "boolean"
  ) {
    employees.push(newEmployee);
    // console.log(employees[employees.length - 1].name);
  } else {
    console.log("Неправильные входные данные");
  }
};

// addEmployee({
//   name: "Каземир",
//   position: "HR",
//   salary: 666,
//   isActive: false
// });

// Удалить сотрудника по имени. Напишите функцию removeEmployee, которая удаляет сотрудника из массива по его имени.

function removeEmployee(name) {
  const currentEmployeeIndex = employees.findIndex((employee) => employee.name === name);
  if(currentEmployeeIndex !== -1) {
    employees.splice(currentEmployeeIndex, 1);
    console.log(employees[0]);
  } else {
    console.log("Сотрудник с таким именем не найден");
  }
};

// removeEmployee("Иван Иванов");

// Посчитать среднюю зарплату активных сотрудников. Напишите функцию calculateAverageSalary, которая возвращает среднюю зарплату только тех сотрудников, у которых isActive: true.

function calculateAverageSalary(employees) {
  const activeEmployees = employees.filter(employee => employee.isActive === true);
  const totalSalary = activeEmployees.reduce((sum, employee) => {
    return sum + employee.salary;
  }, 0);

  const averageSalary = totalSalary / activeEmployees.length;
  return Math.ceil(averageSalary.toFixed(2))
};

// calculateAverageSalary(employees);

// Список сотрудников по должности. Напишите функцию filterByPosition, которая принимает название должности и возвращает список всех сотрудников с этой должностью.

function filterByPosition(position) {
  const filteredEmployees = employees.filter(employee => employee.position === position);
  // console.log(filteredEmployees);
};

// filterByPosition("Аналитик");

// Вывести имена сотрудников, чья зарплата выше среднего. Напишите функцию highEarners, которая возвращает массив имен сотрудников с зарплатой выше средней.

function highEarners() {
  const averageSalary = calculateAverageSalary(employees);
  const filteredEmployees = employees.filter((employee) => employee.salary > averageSalary);

  for(const employee of filteredEmployees) {
    console.log(employee.name);
  }
};

// highEarners();

// Повысить зарплату всем активным сотрудникам. Напишите функцию increaseSalaries, которая увеличивает зарплату всех активных сотрудников на определённый процент.

function increaseSalaries(percent) {
  employees.forEach((employee) => {
    if(employee.isActive) {
      employee.salary += (percent / 100) * employee.salary;
    }
  })

  console.log(employees[3]);
};

increaseSalaries(43);

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
