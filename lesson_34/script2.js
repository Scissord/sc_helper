// Задание 1: Таймер с callback
// Напишите функцию startTimer(seconds, callback),
// которая каждую секунду уменьшает число на 1.
// Когда таймер достигает 0, вызывается callback.

// function startTimer(seconds, callback) {
//   let timer = seconds;
//   const interval_id = setInterval(() => {
//     console.log(timer);
//     if (timer === 0) {
//       callback();
//       clearInterval(interval_id);
//     } else {
//       timer -= 1
//     };
//   }, 1000)
// };

// startTimer(3, () => {
//   console.log('Время кончилось!');
// });

// Задание 2: Последовательные операции
// Реализуйте функцию doTask(taskNumber, callback),
// которая выводит номер задачи через 1 секунду.
// Последовательно выполните 3 задачи с использованием callback:

// function doTask(taskNumber, callback) {
//   setTimeout(() => {
//     console.log(`Закача №${taskNumber} выполнена!`);
//     callback();
//   }, 500);
// };

// doTask(1, () => {
//   doTask(2, () => {
//     doTask(3, () => {
//       console.log('Все задачи выполнены!');
//     })
//   });
// });

// Задание 3: Создание Promise
// Напишите функцию getData(success),
// которая возвращает Promise.
// Если success === true, через 2 секунды возвращает
// строку 'Данные получены', иначе вызывает
// ошибку 'Ошибка загрузки'.

// function getData(success) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       success
//         ? resolve('Данные получены')
//         : reject('Ошибка загрузки')
//     }, 2000);
//   });
// };

// getData(false)
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error(error);
//   })

// Задание 4: Последовательные Promises
// Напишите 3 функции, каждая из которых возвращает Promise, 
// и выполните их последовательно:

// const createPromise = (delay, name) => {
//   return new Promise(() => {
//     setTimeout(() => {
//       console.log(
//         `${name} был выполнен 
//         за ${delay} секунд.`);
//     }, delay * 1000)
//   });
// };

// const getPromises = async () => {
//   createPromise(1, 'Промис 1');
//   createPromise(2, 'Промис 2');
//   createPromise(3, 'Промис 3');
// };

// getPromises();

// Задание 5: Параллельное выполнение Promises
// Создайте 3 функции, которые выполняются 
// одновременно с разным временем 
// завершения (1, 2 и 3 секунды). 
// Используйте Promise.all и Promise.race.

const createPromise = (delay, name) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`${name} был выполнен 
        за ${delay} секунд.`);
      resolve('Запрос выполнен успешно');
    }, delay * 1000)
  });
};

// const promise1 = createPromise(1, 'Промис 1');
// const promise2 = createPromise(2, 'Промис 2');
// const promise3 = createPromise(3, 'Промис 3');

// Promise.all([promise1, promise2, promise3])
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error(error);
//   })

// Promise.race([promise1, promise2, promise3])
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error(error);
//   })

// Задание 7: Работа с API
// Используйте fetch для получения данных с dummyJSON.

// 1. Сделать запрос, получить массив продуктов
// async function getProducts() {
//   const response = await fetch('https://dummyjson.com/products');
//   const data = await response.json();

//   renderProducts(data.products);
// };

// 2. Отрисовать его на странице для  пользователся
// function renderProducts(products) {
//   const productList = document.getElementById('product-list');
//   productList.innerHTML = "";
//   products.forEach((product) => {
//     const productElement = document.createElement('div');
//     productElement.className = 'p-2 border border-slate-200 rounded-lg shadow-xl'
//     productElement.innerHTML = `
//       <img src=${product.thumbnail} alt=${product.title}/>
//       <div class='flex flex-col gap-3'>
//         <h1 class="text-lg font-bold">${product.title}</h1>
//         <p>${product.description}</p>
//         <p class='text-green-500 text-xl'>$${product.price}</p>
//       </div>
//     `;
//     productList.appendChild(productElement);
//   });
// };

// getProducts();

// 3. Накинуть стилей в виде, grid, card, button

// Используйте fetch для получения данных с JSONPlaceholder.
// 1. Запрос на массив постов в JSONPlaceholder.
// 2. Когда мы его получаем мы его отрисовываем для пользователя

// 1. Сделать запрос, получить массив постов
async function getPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();

  renderPosts(data);
};

function renderPosts(posts) {
  const postList = document.getElementById('post-list');
  postList.innerHTML = "";
  posts.forEach((post) => {
    const postElement = document.createElement('div');
    postElement.className = 'p-2 border border-slate-200 rounded-lg shadow-xl'
    postElement.innerHTML = `
      <h1 class="text-lg font-bold">${post.title}</h1>
      <p>${post.body}</p>
      <img src="./edit.svg">
    `;
    postList.appendChild(postElement);
  });
};

getPosts();

// 2. Отрисовать его на странице для  пользователся


// 3. Накинуть стилей в виде, grid, card, button

