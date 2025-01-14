function fetchData(callback) {
  // имитация асинхронной операции
  setTimeout(() => {
    callback('Данные загружены');
  }, 3000);
};

fetchData((data) => {
  console.log(data);
});

// callback hell
// doTask1((result1) => {
//   doTask2(result1, (result2) => {
//     doTask3(result2, (result3) => {
//       console.log(result3);
//     });
//   });
// });
