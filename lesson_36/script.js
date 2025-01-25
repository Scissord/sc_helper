let users = [];
const baseUrl = 'https://jsonplaceholder.typicode.com'

// 1. ПОЛУЧИТЬ ПОЛЬЗОВАТЕЛЕЙ
async function getUsers() {
  try {
    const response = await axios({
      method: 'GET',
      url: baseUrl + '/users'
    });

    users = response.data;
    renderUsers(users);
  } catch (error) {
    console.log(error.message);
  };
};

getUsers();

// 2. ОТОБРАЗИТЬ ПОЛЬЗОВАТЕЛЕЙ
function renderUsers(newUsers) {
  const tableBody = document.getElementById('table_body');
  tableBody.innerHTML = '';

  newUsers.forEach(user => {
    const tableRow = document.createElement('tr');
    tableRow.innerHTML = `
      <td class="text-center p-2 border border-slate-700">${user.id}</td>
      <td class="text-center p-2 border border-slate-700">${user.name}</td>
      <td class="text-center p-2 border border-slate-700">${user.username}</td>
      <td class="text-center p-2 border border-slate-700">${user.email}</td>
      <td class="text-center p-2 border border-slate-700">${user.phone}</td>
      <td class="text-center p-2 border border-slate-700">${user.address.city}</td>
      <td class="text-center p-2 border border-slate-700">${user.company.name}</td>
    `;
    tableBody.appendChild(tableRow);
  });
};

// 3. СОЗДАТЬ ПОЛЬЗОВАТЯ
async function createUser(data) {
  try {
    const response = await axios({
      method: 'POST',
      url: baseUrl + '/users',
      data: data,
    });

    if (response.status === 201) {
      users.push(response.data);
      renderUsers(users);
    };
  } catch (error) {
    console.log(error.message);
  };
};

const button = document.getElementById('create_user');
button.addEventListener('click', async () => {
  const name = document.getElementById('name');
  const login = document.getElementById('login');
  const username = document.getElementById('username');
  const email = document.getElementById('email');
  const phone = document.getElementById('phone');
  const city = document.getElementById('city');
  const address = document.getElementById('address');
  const company = document.getElementById('company');

  if (
    name.value === "" ||
    login.value === "" ||
    email.value === "" ||
    phone.value === "" ||
    city.value === "" ||
    company.value === "" ||
    username.value === "" ||
    address.value === ""
  ) {
    alert('Заполните все поля!');
    return;
  };

  await createUser({
    name: name.value,
    login: login.value,
    email: email.value,
    phone: phone.value,
    city: city.value,
    company: company.value,
    username: username.value,
    address: address.value,
  });
});
// 4. ОБНОВИТЬ ПОЛЬЗОВАТЕЛЯ (PATCH)
// 5. УДАЛИТЬ ПОЛЬЗОВАТЕЛЯ
