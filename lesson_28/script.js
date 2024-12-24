document.addEventListener('DOMContentLoaded', () => {
  // мы достаём контейнер для наших карточек  
  const container = document.querySelector('.container');
  const addButton = document.querySelector('.button');

  // массив с сотрудниками
  let employees = [
    {
      id: 1,
      name: 'Serikbek Medetev',
      position: 'Начальник',
      salary: 1000000,
      description: 'Самый главный',
      avatar: 'https://i.pravatar.cc/300?img=1',
    },
    {
      id: 2,
      name: 'Dias Almasov',
      position: 'Оператор',
      salary: 300000,
      description: 'Хороший работник, отлично продаёт товар клиентам',
      avatar: 'https://i.pravatar.cc/300?img=2'
    },
    {
      id: 3,
      name: 'Bekbolat Alibiev',
      position: 'Программист',
      salary: 600000,
      description: 'Хороший программист, который разрабатывает продукты компании',
      avatar: 'https://i.pravatar.cc/300?img=3'
    },
    {
      id: 4,
      name: 'Garri Abaiev',
      position: 'Дизайнер',
      salary: 400000,
      description: 'Создаёт симпатичные дизайны: кружки, мерч, анимации',
      avatar: 'https://i.pravatar.cc/300?img=4'
    },
  ];

  function renderCards(employees) {
    container.innerHTML = '';

    employees.forEach(employee => {
      const card = document.createElement('div');

      card.classList = 'card';

      card.innerHTML = `
        <div class='left'>
          <h1 class='name'>${employee.name}</h1>
          <p class='position'>${employee.position}</p>
          <p class='salary'>${employee.salary} Тг.</p>
          <p class='description'>${employee.description}</p>
        </div>
        <div class='right'>
          <img class='avatar' src=${employee.avatar}/>
          <div class='icons'>
            <svg data-id="${employee.id}" class='edit' width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <svg data-id="${employee.id}" class='delete' width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 11V17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M14 11V17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M4 7H20" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M6 7H12H18V18C18 19.6569 16.6569 21 15 21H9C7.34315 21 6 19.6569 6 18V7Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
      `
      container.appendChild(card)
    });

    document.querySelectorAll('.delete').forEach(btn => {
      btn.addEventListener('click', fireEmployee);
    });
    document.querySelectorAll('.edit').forEach(btn => {
      btn.addEventListener('click', updateEmployee);
    });
  }; 

  // Нанять сотрудника
  function addEmployee() {
    const name = prompt('Введите имя сотрудника');
    const position = prompt('Введите позицию сотрудника');
    const salary = prompt('Введите зарплату сотрудника');
    const description = prompt('Введите описание сотрудника');

    if(name, position, salary, description) {
      employees.push({
        id: employees.length + 1,
        name: name,
        position: position,
        salary: salary,
        description: description,
        avatar: `https://i.pravatar.cc/300?img=${employees.length + 1}`,
      });
    };
  };

  // Уволить сотрудника
  function fireEmployee(event) {
    const id = Number(event.target.dataset.id);
    const index = employees.findIndex(emp => emp.id === id);
    if (index !== -1) {
      employees.splice(index, 1);
      renderCards(employees);
    }
  };
  // Изменить его данные
  function updateEmployee(event) {
    const id = Number(event.target.dataset.id);
    const employee = employees.find(emp => emp.id === id);
    if (employee) {
      const newName = prompt('Введите новое имя', employee.name);
      const newPosition = prompt('Введите новую должность', employee.position);
      const newSalary = prompt('Введите новую зарплату', employee.salary);
      const newDescription = prompt('Введите новое описание', employee.description);
  
      if (newName) employee.name = newName;
      if (newPosition) employee.position = newPosition;
      if (newSalary) employee.salary = parseInt(newSalary);
      if (newDescription) employee.description = newDescription;
  
      renderCards(employees);
    }
  }

  renderCards(employees);

  // Обработчики событий
  addButton.addEventListener('click', () => {
    addEmployee();
    renderCards(employees);
  })
});
