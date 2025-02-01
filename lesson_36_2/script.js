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
