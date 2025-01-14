function count(callback) {
  setTimeout(() => {
    callback();
  }, 3000);
};

count(() => {
  console.log('Прошло 5 секунд');
});

//callback hell
// doTask1((result1) => {
//   doTask2(result1, (result2) => {
//     doTask3(result2, (result3) => {
//       console.log(result3);
//     });
//   });
// });
