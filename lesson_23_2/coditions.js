const a = 7;

if(a === 5) {
  console.log("да")
} else if (a === 6) {
  console.log(6);
} else {
  console.log("нет")
}

// switch case
const type = 4;

switch (type) {
  case 1:
    console.log('Тип продукта - косметика')
    break;
  case 2:
    console.log('Тип продукта - хозяйственный')
    break;
  case 3:
    console.log('Тип продукта - логистический')
    break;
  default:
    console.log('другой')
}

const condition1 = false;
const condition2 = false;
const condition3 = true;

if((condition1 || condition2) && condition3) {
  console.log('все условия выполнены')
}

const deep = 299;
const isDeep = deep >= 300 ? true : false;

if(isDeep) {
  console.log('Да больше 300 метров');
} else {
  console.log("net")
} 
