// 1. GET - COMMENTS (Получение)
async function getComments() {
  try {
    const response = await axios({
      method: 'GET',
      url: 'https://jsonplaceholder.typicode.com/comments',
    });

    console.log(response.data[0]);
  } catch (error) {
    console.log(error);
  };
};

// getComments();

// 2. POST - COMMENT (Создание)
async function createComment(name, description, email) {
  try {
    const response = await axios({
      method: 'POST',
      url: 'https://jsonplaceholder.typicode.com/comments',
      data: {
        name: name,
        body: description,
        email: email,
      },
    })

    if (response.status === 201) {
      alert('Коммент успешно создан!');
    }
  } catch (error) {
    console.log(error);
  }
};

// 3. PUT - COMMENT (Полное обновление)
async function fullUpdateComment(id, name, description, email) {
  try {
    const response = await axios({
      method: 'PUT',
      url: `https://jsonplaceholder.typicode.com/comments/${id}`,
      data: {
        name: name,
        description: description,
        email: email,
      },
    });

    console.log(response);
  } catch (error) {
    console.log(error);
  };
};

// {
//   name: 'новое название'
// }

// 4. PATCH - COMMENT (Частичное обновление)
async function partUpdateComment(id, data) {
  try {
    const response = await axios({
      method: 'PATCH',
      url: `https://jsonplaceholder.typicode.com/comments/${id}`,
      data: data,
    });

    console.log(response);
  } catch (error) {
    console.log(error);
  };
};

// 5. DELETE - COMMENT (Удаление)
async function deleteComment(id) {
  try {
    const response = await axios({
      method: 'DELETE',
      url: `https://jsonplaceholder.typicode.com/comments/${id}`,
    });

    console.log(response);
  } catch (error) {
    console.log(error);
  };
};

// handlers
const button = document.getElementById('create_comment');

button.addEventListener('click', async () => {
  const name = document.getElementById('name');
  const description = document.getElementById(`
    description
  `);
  const email = document.getElementById('email');

  await createComment(name.value, description.value, email.value);
})
