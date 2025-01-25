// 1. GET - USERS (Получить данные);
async function getUsers() {
  const response = await axios({
    method: 'GET',
    url: 'https://jsonplaceholder.typicode.com/users',
  });

  console.log(response.status);
  console.log(response.data);
};

getUsers();

// 2. POST - USERS (Создать пользователя)
async function createUser(data) {
  const response = await axios({
    method: 'POST',
    url: 'https://jsonplaceholder.typicode.com/users',
    data: data,
  });

  if (response.status === 201) {
    alert('Пользователь успешно создан!');
  };
};

// 3. PUT - USERS (Полное обновление данных)
async function fullUpdateUser(id, data) {
  const response = await axios({
    method: 'PUT',
    url: `https://jsonplaceholder.typicode.com/users/${id}`,
    data: data,
  });
};

// await fullUpdateUser(5, {
//   name: 'John Doe',
//   email: 'test@test.com',
//   phone: '777777777'
// });

// 4. PATCH - USERS (Частичное обновление данных)
async function partUpdateUser(id, data) {
  const response = await axios({
    method: 'PATCH',
    url: `https://jsonplaceholder.typicode.com/users/${id}`,
    data: data,
  });
};

await partUpdateUser(5, {
  email: 'VERIFY@gmail.com',
});

// 5. DELETE - USERS (Удаление пользователя)
async function deleteUser(id) {
  const response = await axios({
    method: 'DELETE',
    url: `https://jsonplaceholder.typicode.com/users/${id}`,
  });
};

// handlers
const button = document.getElementById('save');
button.addEventListener('click', async () => {
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const phone = document.getElementById('phone');

  await createUser({
    name: name.value,
    email: email.value,
    phone: phone.value,
  });
});
