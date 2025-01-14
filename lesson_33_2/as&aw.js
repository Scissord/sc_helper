async function fetchData() {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/posts'
  );
  const data = await response.json();

  const response2 = await fetch('https://dummyjson.com/products');
  const data2 = await response2.json();

  // console.log(data);
  // console.log(data2);
};

fetchData();
