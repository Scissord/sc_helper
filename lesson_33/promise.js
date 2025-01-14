const getPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  return data;
};

const getProducts = async () => {
  const response = await fetch('https://dummyjson.com/products');
  const data = await response.json();
  return data;
};

// построчное выполнение (сверху вниз)
// const posts = await getPosts(); 
// const products = await getProducts(); 

// парраллельное выполнение
// const [posts, products] = await Promise.all([
//   getPosts(), getProducts()
// ]);

const fetchData = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = false;
      if (success) {
        resolve('Данные загружены');
      } else {
        reject('Ошибка загрузки данных');
      }
    }, 3000);
  });
};

fetchData()
  .then((data) => {
    console.log(data);
  }).catch((error) => {
    console.log(error);
  }).finally(() => {
    console.log('Завершение');
  });

