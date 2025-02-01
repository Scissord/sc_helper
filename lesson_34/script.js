// Задание 1: Таймер с callback
// Напишите функцию startTimer(seconds, callback),
// которая каждую секунду уменьшает число на 1.
// Когда таймер достигает 0, вызывается callback.
// function startTimer(seconds, callback) {
//   let timer = seconds;

//   const interval_id = setInterval(() => {
//     console.log(timer);
//     if (timer === 0) {
//       clearInterval(interval_id);
//       callback('Время кончилось!');
//     } else {
//       timer -= 1;
//     };
//   }, 1000)
// };

// startTimer(5, (data) => {
//   console.log(data);
// })

// Задание 2: Последовательные операции
// Реализуйте функцию doTask(taskNumber, callback),
// которая выводит номер задачи через 1 секунду.
// Последовательно выполните 3 задачи с использованием callback:

// function doTask(taskNumber, callback) {
//   setTimeout(() => {
//     console.log(`Задача #${taskNumber} выполнена!`)
//     callback();
//   }, 1000);
// };

// doTask(1, () => {
//   doTask(2, () => {
//     doTask(3, () => {
//       console.log('Задачи завершились');
//     });
//   });
// });

// Задание 3: Создание Promise
// Напишите функцию getData(success),
// которая возвращает Promise. Если success === true,
// через 2 секунды возвращает строку 'Данные получены',
// иначе вызывает ошибку 'Ошибка загрузки'.

// async function getData(success) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       success
//         ? resolve('Данные загружены')
//         : reject('Ошибка загрузки данных');
//     }, 2000);
//   });
// };

// getData(true)
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// Задание 4: Последовательные Promises
// Напишите 3 функции, каждая из
// которых возвращает Promise,
// и выполните их последовательно:

// const getPromise1 = async () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const success = true;

//       success
//         ? resolve('Данные загружены')
//         : reject('Ошибка загрузки данных');
//     }, 2000);
//   })
// };

// const getPromise2 = async () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const success = false;

//       success
//         ? resolve('Данные загружены')
//         : reject('Ошибка загрузки данных');
//     }, 2000);
//   })
// };

// const getPromise3 = async () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const success = true;

//       success
//         ? resolve('Данные загружены')
//         : reject('Ошибка загрузки данных');
//     }, 2000);
//   })
// };

// const getPromises = async () => {
//   await getPromise1()
//     .then((data) => console.log(data))
//     .catch((error) => console.error(error));
//   await getPromise2()
//     .then((data) => console.log(data))
//     .catch((error) => console.error(error));
//   await getPromise3()
//     .then((data) => console.log(data))
//     .catch((error) => console.error(error));
// };

// getPromises();

// Задание 5: Параллельное выполнение Promises
// Создайте 3 функции, которые выполняются
// одновременно с разным временем завершения
// (1, 2 и 3 секунды). Используйте
// Promise.all и Promise.race.

// Функция для создания промиса с заданной задержкой
// const createPromise = (delay, name) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(`
//         ${name} завершен за ${delay} сек.
//       `);
//     }, delay * 1000);
//   });
// };

// Три промиса с разным временем завершения
// const promise1 = createPromise(1, "Промис 1");
// const promise2 = createPromise(2, "Промис 2");
// const promise3 = createPromise(3, "Промис 3");

// Использование Promise.all
// Promise.all([promise1, promise2, promise3])
//   .then((results) => {
//     console.log(
//       "Promise.all результаты:", results
//     );
//   })
//   .catch((error) => {
//     console.error(
//       "Ошибка в Promise.all:", error
//     );
//   });

// Использование Promise.race
// Promise.race([promise1, promise2, promise3])
//   .then((result) => {
//     console.log("Promise.race результат:", result);
//   })
//   .catch((error) => {
//     console.error("Ошибка в Promise.race:", error);
//   });

// Задание 7: Работа с API
// Используйте fetch для получения данных с dummyJSON.
// 1. Запрос на массив продуктов в dummyJSON.
// 2. Когда мы его получаем мы его отрисовываем для пользователя

async function fetchProducts() {
  try {
    const response = await fetch('https://dummyjson.com/products');

    const data = await response.json();

    renderProducts(data.products);
  } catch (error) {
    console.error(error)
  }
};

function renderProducts(products) {
  const productList = document.getElementById('product-list');
  productList.innerHTML = "";

  products.forEach((product) => {
    const productElement = document.createElement('div');
    productElement.className = 'border rounded-lg border-slate-200 p-2';
    productElement.innerHTML = `
      <img src="${product.thumbnail}" alt="${product.title}">
      <div class='flex flex-col gap-2'>
        <h3 class="tex-xl font-bold">${product.title}</h3>
        <textarea>${product.description}</textarea>
        <p class='text-green-500'>$${product.price}</p>
      </div>
    `;
    productList.appendChild(productElement);
  });
};

// fetchProducts();

// Используйте fetch для получения данных с JSONPlaceholder.
// 1. Запрос на массив постов в JSONPlaceholder.
// 2. Когда мы его получаем мы его отрисовываем для пользователя

async function fetchPosts() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();

    renderPosts(data);
  } catch (error) {
    console.error(error)
  }
};

function renderPosts(posts) {
  const postList = document.getElementById('post-list');
  postList.innerHTML = "";

  posts.forEach((post) => {
    const postElement = document.createElement('div');
    postElement.className = 'border border-black p-3 rounded-lg';
    postElement.innerHTML = `
      <div class='flex flex-col gap-2'>
        <h3 class="tex-xl font-bold">${post.title}</h3>
        <p>${post.body}</p>
      </div>
    `;
    postList.appendChild(postElement);
  })

};

fetchPosts();
