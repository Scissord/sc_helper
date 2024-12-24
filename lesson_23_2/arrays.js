const employers = [
  {
    id: 1,
    name: 'John',
    age: 30,
    city: 'New York',
    country: 'USA',
    occupation: 'Engineer',
    salary : 10000
  },
  {
    id: 2,
    name: 'Eva',
    age: 22,
    city: 'New Jersey',
    country: 'USA',
    occupation: 'Engineer',
    salary : 20000
  },
  {
    id: 3,
    name: 'Doe',
    age: 25,
    city: 'New Hampshire',
    country: 'USA',
    occupation: 'Engineer',
    salary : 30000
  },
];

// filter
const filtered = employers.filter((employee) => employee.salary >= 20001)
// console.log(filtered[0]);
// map
const mapped = employers.map((employee) => {
  return {
    id: employee.id,
    name: employee.name,
    age: employee.age,
    city: employee.city,
    country: employee.country,
    occupation: employee.occupation,
    salary: employee.salary + 5000
  }
})
// forEach
employers.forEach((employee, index, array) => {
  array[index].salary = array[index].salary + 25000;
})
// console.log(employers);
// reduce
const reduced = employers.reduce((acc, employee) => {
  return acc + employee.salary;
}, 0)
// console.log(reduced);

// добавит в конец массива
// employers.push({
//   id: 4,
//   name: 'qwewqe',
//   age: 25,
//   city: 'Delaware',
//   country: 'USA',
//   occupation: 'Engineer',
//   salary : 50000
// });

// console.log(employers[3])

// удалить из конца массива
employers.pop();
// удалить из начала
employers.shift();
// console.log(employers[1])