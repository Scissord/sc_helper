// https://jsonplaceholder.typicode.com/comments

let comments = [];

// 1. ПОЛУЧИТЬ КОММЕНТЫ
async function getComments() {
  const response = await axios({
    method: 'GET',
    url: 'https://jsonplaceholder.typicode.com/comments',
  });

  // body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
  // email: "Eliseo@gardner.biz"
  // id: 1
  // name: "id labore ex et quam laborum"
  // postId: 1

  comments = response.data;
  renderComments(comments);
};

getComments();
// 2. ОТОБРАЗИТЬ КОММЕНТЫ
const renderComments = (comments) => {
  const tableBody = document.getElementById('table_body');
  tableBody.innerHTML = '';

  comments.forEach((comment, index) => {
    const tableRow = document.createElement('tr');
    tableRow.className = '';
    tableRow.innerHTML = `
      <td class="text-center p-2 border border-slate-700">
        ${comment.id}
      </td>
      <td class="text-center p-2 border border-slate-700">
        ${comment.name}
      </td>
      <td class="text-center p-2 border border-slate-700">
        ${comment.body}
      </td>
      <td class="text-center p-2 border border-slate-700">
        ${comment.email}
      </td>
    `;
    tableBody.appendChild(tableRow);
  });
};

// 3. СОЗДАТЬ КОММЕНТ
async function createComment(data) {
  const response = await axios({
    method: 'POST',
    url: 'https://jsonplaceholder.typicode.com/comments',
    data: data,
  });

  if (response.status === 201) {
    comments.unshift(response.data);
    renderComments(comments);
  };
};

const button = document.getElementById('create_comment');
button.addEventListener('click', async () => {
  const name = document.getElementById('name');
  const body = document.getElementById('body');
  const email = document.getElementById('email');

  if (
    name.value === "" ||
    body.value === "" ||
    email.value === ""
  ) {
    alert('Заполните все поля!');
    return;
  };

  await createComment({
    name: name.value,
    body: body.value,
    email: email.value,
  });
});

// 4. ОБНОВИТЬ КОММЕНТ (PATCH)
async function updateComment(id, data) {
  const response = await axios({
    method: 'PATCH',
    url: `https://jsonplaceholder.typicode.com/comments/${id}`,
    data: data,
  });

  if (response.status === 200) {
    // response.data
    // найти элемент в массиве
    // нужно его заменить на response.data
    // отрендерить заново html
  };
};

// 5. УДАЛИТЬ КОММЕНТ
async function deleteComment(id) {
  const response = await axios({
    method: 'DELETE',
    url: `https://jsonplaceholder.typicode.com/comments/${id}`,
  });

  if (response.status === 200) {
    // найти этот коммент в массиве
    // удалить этот коммент из массива
    // рендрить массив в html
  };
};

// Функция для получения списка студентов
async function getStudents() {
  const url = 'https://api.kazakhcrusader.ru/api/exercise?student_id=15&exercise_id=2';

  const data = await fetch(url);
  console.log(data);


    // .then(response => {
    //   console.log("Ответ от сервера:", response);  // Логируем объект ответа от сервера

    //   // Проверяем статус ответа
    //   if (!response.ok) {
    //       console.error("Ошибка сервера: статус", response.status);
    //       throw new Error('Ошибка при получении данных, статус: ' + response.status);
    //   }

    //   // Преобразуем ответ в JSON
    //   return response.json();
    // })
    // .then(data => {
    //   console.log("Данные, полученные от сервера:", data); // Логируем полученные данные

    //   const tableBody = document.querySelector('#studentsTable tbody');
    //   tableBody.innerHTML = '';  // Очищаем таблицу перед добавлением новых данных
    //   console.log("Очищена таблица перед добавлением данных");

    //   // Проверяем, что данные — это массив
    //   if (Array.isArray(data) && data.length > 0) {

    //     console.log("Данные получены, добавляем их в таблицу");

    //         // Заполняем таблицу данными студентов
    //         data.forEach(student => {
    //             const row = document.createElement('tr');
    //             row.innerHTML = `
    //                 <td>${student.id}</td>
    //                 <td>${student.name}</td>
    //                 <td>${student.exercise_id}</td>
    //             `;
    //             tableBody.appendChild(row);
    //         });

    //         console.log("Данные успешно добавлены в таблицу");
    //     } else {
    //         console.log("Данных нет, выводим сообщение");
    //         // Если данных нет, выводим сообщение
    //         const row = document.createElement('tr');
    //         row.innerHTML = '<td colspan="3">Нет данных для отображения</td>';
    //         tableBody.appendChild(row);
    //     }
    // })
    // .catch(error => {
    //     console.error("Ошибка при запросе или обработке данных:", error);  // Логируем ошибку
    //     alert('Произошла ошибка при загрузке данных');
    // });
};

// Загружаем список студентов при загрузке страницы
window.onload = () => {
  console.log("Страница загружена, начинаем загрузку данных...");
  getStudents();
};