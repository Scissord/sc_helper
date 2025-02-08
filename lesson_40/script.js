// ЗАДАНИЕ 1
async function createStudent(data) {
  const response = await axios({
    method: 'POST',
    url: 'https://api.kazakhcrusader.ru/api/exercise',
    data: data,
  });

  if(response.status === 200 || response.status === 201) {
    alert('Студент успешно создан!');
  };
};

const createButton = document.getElementById('create_button');
createButton.addEventListener('click', async () => {
  const name = document.getElementById('create_name').value;

  if(!name) {
    alert('Укажите все поля!');
    return;
  };

  const data = {
    exercise_id: 1,
    name: name,
  };

  await createStudent(data);
});

// ЗАДАНИЕ 2
async function getStudents() {
  const response = await axios({
    method: 'GET',
    url: 'https://api.kazakhcrusader.ru/api/exercise?student_id=20&exercise_id=2'
  });

  if(response.status === 200) {
    renderStudents(response.data.students);
  };
};

getStudents();

function renderStudents(students) {
  const tableBody = document.getElementById('table_body');
  tableBody.innerHTML = '';

  students.forEach(student => {
    const tableRow = document.createElement('tr');
    tableRow.innerHTML = `
      <td class="border border-gray-300">
        ${student.id}
      </td>
      <td class="border border-gray-300">
        ${student.name}
      </td>
      <td class="border border-gray-300">
        ${student.phone}
      </td>
      <td class="border border-gray-300">
        ${student.age}
      </td>
      <td class="border border-gray-300">
        ${student.gender}
      </td>
      <td class="border border-gray-300">
        ${student.email}
      </td>
      <td class="border border-gray-300">
        ${student.created_at}
      </td>
      <td class="border border-gray-300">
        ${student.updated_at}
      </td>
    `;
    tableBody.appendChild(tableRow);
  });
};

// ЗАДАНИЕ 3
async function updateStudent(data) {
  const response = await axios({
    method: 'PATCH',
    url: 'https://api.kazakhcrusader.ru/api/exercise?student_id=20',
    data: data
  });

  if(response.status === 200) {
    alert('Студент успешно обновлен!');
  };
};

const updateButton = document.getElementById('update_button');
updateButton.addEventListener('click', async () => {
  const name = document.getElementById('update_name').value;
  const phone = document.getElementById('update_phone').value;
  const age = document.getElementById('update_age').value;
  const gender = document.getElementById('update_gender').value;
  const email = document.getElementById('update_email').value;

  if(!name || !phone || !age || !gender || !email) {
    alert('Заполните все поля!');
    return;
  };

  await updateStudent({
    exercise_id: 3,
    name: name,
    phone: phone,
    age: age,
    gender: gender,
    email: email,
  });
});

// ЗАДАНИЕ 4
async function deleteStudent() {
  const response = await axios({
    method: 'DELETE',
    url: 'https://api.kazakhcrusader.ru/api/exercise?student_id=20',
    data: {
      exercise_id: 4
    },
  });

  if(response.status === 200) {
    alert('Успешно удалён!');
  };
};

const deleteButton = document.getElementById('delete_button');
deleteButton.addEventListener('click', async () => {
  await deleteStudent();
});
