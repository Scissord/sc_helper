async function fetchData() {
  try {
    // if error here
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    const response2 = await fetch('https://dummyjson.com/products');
    const data2 = await response2.json();

    console.log(data);
    console.log(data2);

  } catch (error) {
    // than this working
    console.log('here');
    console.error('Ошибка:', error);
  };
}

fetchData();
