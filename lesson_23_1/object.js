const obj = {
  id: 1,
  label: 'Приход',
  products: [
    {
      id: 1,
      label: 'Молоко',
      quantity: 12,
      unit: 'шт.'
    },
    {
      id: 2,
      label: 'Творог',
      quantity: 14,
      unit: 'уп.'
    },
    {
      id: 4,
      label: 'Сгущенка',
      quantity: 30,
      unit: 'б.'
    }
  ]
  // ...
};

// console.log(obj.products.reduce((acc, item) => {
//   return acc + item.quantity
// }, 0));

// split reverse join
const a = 'Hello';
console.log(a.split("").reverse().join(""));