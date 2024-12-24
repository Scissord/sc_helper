// условия
const a = 8;

if(a === 5) {
  console.log('condition 1');
} else if (a === 6) {
  console.log('condition 3');
} else if ((a === 7 && a === 8) || a === 9) {
  console.log('condition 4');
} else {
  console.log('condition 2');
}

// switch case
const type = 'Первый';

switch (type) {
  case "Первый":
    console.log('Тип продукта - косметика')
    break;
  case "Второй":
    console.log('Тип продукта - хозяйственный')
    break;
  case "Третий":
    console.log('Тип продукта - логистический')
    break;
  default:
    console.log('другой')
}
