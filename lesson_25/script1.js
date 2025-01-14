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
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (i % 2 === 0) {
//     sum += arr[i];
//   };
// };
// 20. Поменять местами максимальное и минимальное значения в массиве
// 1.1 find indexes of min and max 
// let minIndex = 0;
// let maxIndex = 0;
// cycle 
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < arr[minIndex]) {
//     minIndex = i;
//   }
//   if (arr[i] > arr[maxIndex]) {
//     maxIndex = i;
//   }
// };

// let tmp = arr[maxIndex];
// arr[maxIndex] = arr[minIndex];
// arr[minIndex] = tmp;

// const fruits = ['bananas', 'apples', 'grapes'];

// String Arrays
const str1 = 'kfgjfkjg';
// 1. Подсчитать количество гласных в строке
// const vowels = 'aeyio';
// let counter = 0;
// for (const letter of str1) {
//   if (vowels.includes(letter)) {
//     counter++
//   };
// };
// console.log(counter);

// let str2 = 'Hello, World. Make me trim';
// str2 = str2.replace(/\s+/g, '');
// console.log(str2);
// 2. Удалить все пробелы из строки
// const str3 = 'I wanna be a superhero';
// 3. Найти самое длинное слово в строке
// const words = str3.split(/\s+/);
// const max = {
//   length: 0,
//   word: "",
// };

// for (const word of words) {
//   if (word.length > max.length) {
//     max.length = word.length;
//     max.word = word;
//   };
// };
// 4. Проверить, является ли строка палиндромом
// let str4 = 'А собака боса';
// str4 = str4.toLowerCase();
// str4 = str4.replace(/\s+/g, '');

// const reversedStr4 = str4.split("").reverse().join("");
// str4 === reversedStr4
//   ? console.log(true)
//   : console.log(false);
// console.log(reversedStr4);
// 5. Подсчитать количество слов в строке
// const str5 = 'I wanna be a superhero, please';
// const words = str5.split(/\s+/);
// console.log(words.length);

// 6. Заменить все гласные в строке на звездочку
// const str6 = 'You are bastard';
// const result = str6.replace(/[aeiouAEIOU]/g, "*");
// console.log(result);

// 7. Вернуть первые буквы каждого слова в строке
// const str7 = 'I wanna be a superhero';
// const words = str7.split(/\s+/);
// const firstLetters = words.map((word) => word[0]);
// console.log(firstLetters);

// 8. Найти количество уникальных символов в строке
// const str8 = 'a aa abcc c';
// const uniques = [];

// const splited = str8.split("");
// for (const letter of splited) {
//   if (!uniques.includes(letter)) {
//     uniques.push(letter);
//   };
// };

// console.log(uniques.length)

// 9. Перевернуть строку (реверс)
// const str9 = 'I wanna be a superhero';
// console.log(str9.split("").reverse().join(""));

// 10. Заменить первое слово в строке на заданное слово
// const str10 = 'I wanna be a superhero';
// const words = str10.split(' '); // Split the string into words
// words[0] = 'They'; // Replace the first word
// const updatedString = words.join(' '); // Join the words back into a string
// console.log(updatedString);

// Object Arrays
// 11. Найти ключ с максимальным значением в объекте
// const obj = {
//   apple: 10,
//   banana: 20,
//   cherry: 30,
//   date: 25,
//   intense: 62,
// };

// const values = Object.entries(obj);
// const max = ["", 0];
// const tmp = values.map((value) => {
//   if (value[1] > max[1]) {
//     max[0] = value[0];
//     max[1] = value[1];
//   };
// });

// console.log(max[0]);

// output: cherry
// 12. Посчитать общее количество свойств в объекте
// const obj2 = {
//   apple: 10,
//   banana: 20,
//   cherry: 30,
//   date: 25,
//   intense: 62,
// };
// const length = Object.keys(obj2).length
// console.log(length);

// 13. Удалить все свойства с пустыми значениями
// const obj3 = {
//   name: 'Alice',
//   age: null,
//   email: '',
//   city: 'New York',
//   phone: undefined
// };

// const values = Object.entries(obj3);
// values.forEach((value) => {
//   if (value[1] === null || value[1] === "" || value[1] === undefined) {
//     delete obj3[value[0]];
//   };
// });

// console.log(obj3);

// 14. Создать массив всех значений объекта
const obj4 = {
  apple: 10,
  banana: true,
  cherry: "dada",
  date: null,
};
const arr4 = [];

const values = Object.entries(obj4);
values.forEach((value) => {
  arr4.push(value[1]);
});
// console.log(arr4);
// output [10, true, "dada", null]

// 15. Объединить два объекта в один
// const obj5_1 = {
//   name: 'Alice',
//   age: null,
//   email: '',
//   city: 'New York',
//   phone: undefined
// };
// const obj5_2 = {
//   apple: 10,
//   banana: 20,
//   cherry: 30,
//   date: 25,
//   intense: 62,
// };

// const obj5_3 = { ...obj5_1, ...obj5_2 }
// console.log(obj5_3);

// 16. Удалить повторяющиеся значения из массива с использованием Set
// const arr6 = [1, 2, 3, 4, 5, 6, 1, 2, 3, 7, 8, 3, 4, 9];
// const unique = [...new Set(arr6)];
// console.log(unique);

// 17. Проверить, есть ли значение в Set
// const set = new Set([1, 2, 3, 4, 5, 6]);
// console.log(set.has(7));

// 18. Подсчитать количество элементов в Set
// const set2 = new Set([1, 2, 3, 4, 5, 6]);
// console.log(set2.size);

// 19. Добавить и удалить элемент в Map
// const map = new Map();
// const objKey = { id: 1 };
// map.set(objKey, "John");
// const objKey2 = 2;
// map.set(objKey2, { name: 'Ivan' });
// const objKey3 = "val";
// map.set(objKey3, [1, 2, 3, 4, 5]);
// map.delete(objKey3);
// console.log(map);

// 20. Найти сумму всех значений в Map
const map = new Map([
  ["a", 20],
  ["b", 40],
  ["c", 60],
]);

let sum = 0;
for (let [key, value] of map) {
  sum += value;
};

console.log(sum);
