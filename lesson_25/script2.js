// Conditions
// if else
// switch
// const weather = 'sunny';

// if(weather === 'rainy') {
//   console.log('Возьми зонтик')
// } else if(weather === 'sunny') {
//   console.log('Возьми очки от солнца')
// } else {
//   console.log('Возьми другой предмет одежды')
// }

// switch(weather) {
//   case 'rainy':
//     console.log('Возьми зонтик');
//     break;
//   case 'sunny':
//     console.log('Возьми очки от солнца');
//     break;
//   case 'snowy':
//     console.log('Возьми перчатки')
//     break;
//   default:
//     console.log('Возьми другой предмет одежды');
//     break;
// }

// Cycles
// const arr = [52, -32, 123, 5, 7000]

// for
// for(let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// };
// while
// let i = 0;
// while(i < arr.length) {
//   console.log(arr[i]);
//   i++;
// };
// do while
// let j = 0;
// do {
//   console.log(arr[j]);
//   j++;
// } while(j < arr.length);

// Array
const fruits = ['apples', 'bananas', 'oranges']

for(let i = 0; i < fruits.length; i++) {
  fruits[i] = fruits[i].toUpperCase();
};

const arr = [52, -32, 123, 5, 7000]
// Numbers
// 1. Является ли введенное число четным или нечетным.
// for(let counter = 0; counter < arr.length; counter++) {
//   if(arr[counter] % 2 === 0) {
//     console.log(arr[counter], "-", "Четное")
//   } else {
//     console.log(arr[counter], "-", "Нечетное")
//   }
// }
// 2. Найти самое большое число в массиве
// let max = null;
// for(let i = 0; i < arr.length; i++) {
//   if(arr[i] > max) {
//     max = arr[i];
//   };
// };
// console.log(max);
// 3. Найти сумму всех чисел в массиве
// let sum = 0;
// for(let i = 0; i < arr.length; i++) {
//   sum += arr[i]
// };
// console.log(sum);
// 4. Найти среднее арифметическое элементов массива
// let sum = 0;
// for(let i = 0; i < arr.length; i++) {
//   sum += arr[i]
// };
// const average = sum / arr.length
// console.log(average);
// 5. Найти количество четных чисел в массиве
// let quantity = 0;
// for(let i = 0; i < arr.length; i++) {
//   if(arr[i] % 2 === 0) {
//     quantity += 1;
//   }
// }
// console.log(quantity);
// 6. Развернуть массив (наоборот)
// no reverse()
// const newArr = [];
// for(let i = 0; i < arr.length; i++) {
//   newArr.unshift(arr[i]);
// };
// console.log(newArr)
// 7. Найти минимальное значение в массиве
// let min = null;
// for(let i = 0; i < arr.length; i++) {
//   if(arr[i] < min) {
//     min = arr[i]
//   };
// };
// console.log(min)
// 8. Подсчитать количество элементов больше заданного числа
// const tmp = 5;
// let quantity = 0;
// for(let i = 0; i < arr.length; i++) {
//   if(arr[i] > tmp) {
//     quantity += 1
//   };
// };
// console.log(quantity);
// 9. Создать новый массив из квадратов чисел
// const newArr = [];
// for(let i = 0; i < arr.length; i++) {
//   const square = arr[i] * arr[i];
//   newArr.push(square);
// };
// console.log(newArr)
// 10. Проверить, есть ли число в массиве
// const target = 123;
// let isExist = false;
// for(let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
//   if(arr[i] === target) {
//     isExist = true;
//     break;
//   }
// }
// console.log(isExist);
// 11. Найти произведение всех чисел в массиве
// let multiply = 1;
// for(let i = 0; i < arr.length; i++) {
//   multiply *= arr[i]
// };
// console.log(multiply);
// 12. Удалить все четные числа из массива
// filter
// const newArr = arr.filter((value) => value % 2 !== 0);
// for
// const newArr = [];
// for(let i = 0; i < arr.length; i++) {
//   if(arr[i] % 2 !== 0) {
//     newArr.push(arr[i]);
//   };
// };
// console.log(newArr);
// 13. Подсчитать количество отрицательных чисел в массиве
// let quantity = 0;
// for(let i = 0; i < arr.length; i++) {
//   if(arr[i] < 0) {
//     quantity += 1;
//   }
// }
// console.log(quantity);
// 14. Найти индексы всех вхождений заданного числа в массиве
// const target = 52;
// const arr14 = [52, 35, 52, 23, 76, 52];
// const indexes = [];
// for(let i = 0; i < arr14.length; i++) {
//   if(arr14[i] === target) {
//     indexes.push(i);
//   };
// };
// console.log(indexes);
// output [0, 2, 5]
// 15. Создать массив с элементами, умноженными на их индексы
// const newArr = [];
// for(let i = 0; i < arr.length; i++) {
//   newArr.push(arr[i] * i);
// };
// console.log(newArr);
// 16. Удалить повторяющиеся элементы из массива
// const arr16 = [52, 35, 76, 52, 23, 76, 52];
// const newArr = [];
// for(let i = 0; i < arr16.length; i++) {
//   if(!newArr.includes(arr16[i])) {
//     newArr.push(arr16[i]);
//   };
// };
// console.log(newArr);
// output: [52, 35, 76, 23];
// 17. Найти второй по величине элемент в массиве
// let max = null;
// let pre_max = null;
// for(let i = 0; i < arr.length; i++) {
//   if(arr[i] > max) {
//     pre_max = max;
//     max = arr[i];
//   } else if(arr[i] > pre_max && arr[i] < max) {
//     pre_max = arr[i];
//   }
// };
// console.log(pre_max);
// 18. Определить, является ли массив палиндромом
// const arr18 = [1, 2, 3, 2, 1];
// let isPalindrome = true;
// for(let i = 0; i < Math.floor(arr18.length / 2); i++) {
//   if(arr18[i] !== arr18[arr18.length - 1 - i]) {
//     isPalindrome = false;
//   }
// };
// console.log(isPalindrome);
// output: true
// 19. Подсчитать сумму чисел на четных индексах
// let sum = 0;
// for(let i = 0; i < arr.length; i++) {
//   if(i % 2 === 0) {
//     sum += arr[i];
//   };
// };
// console.log(sum);
// 20. Поменять местами максимальное и минимальное значения в массиве
// найти индексы max min в цикле
// const arr = [52, -32, 123, 5, 7000]

let minIndex = 0;
let maxIndex = 0;

for(let i = 0; i < arr.length; i++) {
  if(arr[i] > arr[maxIndex]) {
    maxIndex = i;
  }

  if(arr[i] < arr[minIndex]) {
    minIndex = i;
  }
}

// замена через 3 переменные
const temporary = arr[maxIndex];
arr[maxIndex] = arr[minIndex];
arr[minIndex] = temporary;
// output [52, 7000, 123, 5, -32];

// String Arrays
// 1. Подсчитать количество гласных в строке
// 2. Удалить все пробелы из строки
// 3. Найти самое длинное слово в строке
// 4. Проверить, является ли строка палиндромом
// 5. Подсчитать количество слов в строке
// 6. Заменить все гласные в строке на звездочку
// 7. Вернуть первые буквы каждого слова в строке
// 8. Найти количество уникальных символов в строке
// 9. Перевернуть строку (реверс)
// 10. Заменить первое слово в строке на заданное слово

// Object Arrays
// 11. Найти ключ с максимальным значением в объекте
// 12. Посчитать общее количество свойств в объекте
// 13. Удалить все свойства с пустыми значениями
// 14. Создать массив всех значений объекта
// 15. Объединить два объекта в один
// 16. Удалить повторяющиеся значения из массива с использованием Set
// 17. Проверить, есть ли значение в Set
// 18. Подсчитать количество элементов в Set
// 19. Добавить и удалить элемент в Map
// 20. Найти сумму всех значений в Map
