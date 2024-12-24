// Conditions
// if else
// switch

// const weather = 'rainy';

// if(weather === 'rainy') {
//   console.log('Возьми зонтик');
// } else if(weather === 'sunny') {
//   console.log('Одень очки от солнца');
// } else {
//   console.log('Одень другой предмет одежды')
// }

// switch(weather) {
//   case 'rainy':
//     console.log('Возьми зонтик');
//     break;
//   case 'sunny':
//     console.log('Одень очки от солнца');
//     break;
//   case 'showy':
//     console.log('Одень очки от солнца');
//     break;
//   default:
//     console.log('Одень другой предмет одежды');
//     break;
// }

// Cycles
// const arr = [10, 9, 21, 4];
// for
// for(let i = 0; i < arr.length; i++) {
//   arr[i] = 5;
// };

// while
// let i = 5;
// while(i < 10) {
//   console.log(i);
//   i++;
// }
// do while
// let j = 0;

// do {
//   console.log(j);
//   j++;
// } while (j < 3);

// Array
const fruits = ['apples', 'bananas', 'oranges']

// for(let i = 0; i < fruits.length; i++) {
//   fruits[i] = fruits[i].toUpperCase()
// };
// const newFruits = fruits.map((fruit) => fruit.toUpperCase())
// toUpperCase()

// Numbers
const arr = [76, 133, 1352, 1, 2, 52, 2000, -45]
// 1. Является ли введенное число четным или нечетным.
// for(let i = 0; i < arr.length; i++) {
//   if(arr[i] % 2 === 0) {
//     console.log(arr[i], "-", 'Чётное');
//   } else {
//     console.log(arr[i], "-", 'Нечётное');
//   }
// };
// 2. Найти самое большое число в массиве
// let max = null;
// for(let i = 0; i < arr.length; i++) {
//   if(arr[i] > max) {
//     max = arr[i];
//   }
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
//   sum += arr[i];
// };
// const average = sum / arr.length;
// console.log(average);
// 5. Найти количество четных чисел в массиве
// let evenNumber = 0;
// for(let i = 0; i < arr.length; i++) {
//   if(arr[i] % 2 === 0) {
//     evenNumber += 1;
//   }
// }
// console.log(evenNumber);
// 6. Развернуть массив (наоборот)
// const newArr = [];
// for(let i = 0; i < arr.length; i++) {
//   newArr.unshift(arr[i]);
// };
// console.log(newArr)
// 7. Найти минимальное значение в массиве
// let min = null;
// for(let i = 0; i < arr.length; i++) {
//   if(arr[i] < min) {
//     min = arr[i];
//   };
// };
// console.log(min);
// 8. Подсчитать количество элементов больше заданного числа
// const target = 100;
// let quantity = 0;
// for(let i = 0; i < arr.length; i++) {
//   if(arr[i] > target) {
//     quantity += 1;
//   };
// };
// console.log(quantity);
// 9. Создать новый массив из квадратов чисел
// const newArr = [];
// for(let i = 0; i < arr.length; i++) {
//   newArr.push(arr[i] * arr[i]);
// };
// console.log(newArr);
// 10. Проверить, есть ли число в массиве
// const target = 1352;
// let isExist = false;
// for(let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
//   if(arr[i] === target) {
//     isExist = true;
//     break;
//   };
// };
// console.log(isExist);
// 11. Найти произведение всех чисел в массиве
// let multiply = 1;
// for(let i = 0; i < arr.length; i++) {
//   multiply *= arr[i]
// }
// console.log(multiply)
// 12. Удалить все четные числа из массива
// for(let i = 0; i < arr.length; i++) {
//   if(arr[i] % 2 === 0) {
//     arr.splice(i, 1);
//     i--;
//   };
// };
// console.log(arr)
// 13. Подсчитать количество отрицательных чисел в массиве
// let negative = 0;
// for(let i = 0; i < arr.length; i++) {
//   if(arr[i] < 0) {
//     negative += 1
//   };
// };
// console.log(negative);
// 14. Найти индексы всех вхождений заданного числа в массиве
// const arr14 = [52, 43, 65, 52, 12, 86, 52];
// const target = 52;
// const indexes = [];
// for(let i = 0; i < arr14.length; i++) {
//   if(arr14[i] === target) {
//     indexes.push(i)
//   };
// };
// console.log(indexes);
// 15. Создать массив с элементами, умноженными на их индексы
// const newArr = [];
// for(let i = 0; i < arr.length; i++) {
//   newArr.push(arr[i] * i);
// };
// console.log(newArr);
// 16. Удалить повторяющиеся элементы из массива
// const arr16 = [12, 52, 43, 65, 52, 12, 86, 52];
// const newArr = [];
// const double = {};
// for(let i = 0; i < arr16.length; i++) {
//   if(!double[arr16[i]]) {
//     newArr.push(arr16[i]);
//     double[arr16[i]] = true;
//   };
// };
// console.log(newArr, double);
// 17. Найти второй по величине элемент в массиве
// let pre_max = null;
// let max = null;
// for(let i = 0; i < arr.length; i++) {
//   if(arr[i] > max) {
//     pre_max = max;
//     max = arr[i];
//   } else if(arr[i] > pre_max && arr[i] < max) {
//     pre_max = arr[i];
//   };
// };
// console.log(pre_max);
// 18. Определить, является ли массив палиндромом
// const arr18 = [1, 2, 3, 4, 2, 1];
// let isPalindrome = true;
// for(let i = 0; i < Math.floor(arr18.length / 2); i++) {
//   if(arr18[i] !== arr18[arr18.length - 1 - i]) {
//     isPalindrome = false;
//   };
// };
// console.log(isPalindrome);
// 19. Подсчитать сумму чисел на четных индексах
// 20. Поменять местами максимальное и минимальное значения в массиве

// const fruits = ['bananas', 'apples', 'grapes'];

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

// const arr3 = [
// ];

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


