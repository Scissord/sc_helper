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

for (let i = 0; i < fruits.length; i++) {
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

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > arr[maxIndex]) {
    maxIndex = i;
  }

  if (arr[i] < arr[minIndex]) {
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
// const str1 = 'aghjgehjghj';
// const vowels = 'eyuioa';
// let quantity = 0;
// str1.split("").map((letter) => {
//   if (vowels.includes(letter)) {
//     quantity++;
//   };
// });
// console.log(quantity);

// 2. Удалить все пробелы из строки
// let str2 = 'Hello, World please trim me';
// str2 = str2.replace(/\s+/g, '');
// console.log(str2);

// 3. Найти самое длинное слово в строке
// const str3 = 'I wanna be a superhero';
// const max = {
//   length: 0,
//   word: "",
// };

// const words = str3.split(/\s+/);
// for (const word of words) {
//   if (word.length > max.length) {
//     max.length = word.length;
//     max.word = word;
//   };
// };
// console.log('Длина самого длинного слова -', max.length, 'И ЭТО СЛОВО -', max.word);

// 4. Проверить, является ли строка палиндромом
// let str4 = 'qlwemwopqemqw';
// str4 = str4.toLowerCase().replace(/\s+/g, "");
// const reversedStr4 = str4.split("").reverse().join("");

// console.log(str4 === reversedStr4)

// 5. Подсчитать количество слов в строке
// const str5 = 'I wanna be a superhero qwewqe qwewqe';
// const words = str5.split(/\s+/);
// console.log(words.length);

// 6. Заменить все гласные в строке на звездочку
// const str6 = 'You are bastard';
// const result = str6.replace(/[aeiouAEIOU]/g, "*");

// 7. Вернуть первые буквы каждого слова в строке
// const firstLetters = [];
// const str7 = 'I wanna be a superhero';
// const words = str7.split(/\s+/);
// for (const word of words) {
//   firstLetters.push(word.split('')[0]);
// };

// console.log(firstLetters)

// 8. Найти количество уникальных символов в строке
// const str8 = 'I wanna be a superhero';
// const uniques = [];
// let quantity = 0;
// const words = str8.split(/\s+/);
// for (const word of words) {
//   for (const letter of word) {
//     if (!uniques.includes(letter)) {
//       uniques.push(letter);
//       quantity++;
//     };
//   };
// };
// console.log(quantity);
// 9. Перевернуть строку (реверс)
const str8 = 'I wanna be a superhero';
const reversed = str8.split('').reverse().join('');
// console.log(reversed);
// 10. Заменить первое слово в строке на заданное слово
const str9 = 'I wanna be a superhero';
const newWord = 'qowejowqe'; // Replace the first word with this word

// Replace the first word
const words = str9.split(' '); // Split the string into words
words[0] = newWord; // Replace the first word
const updatedString = words.join(' '); // Join the words back into a string
// console.log(updatedString); // Output: "We wanna be a superhero"


// Object Arrays
// 11. Найти ключ с максимальным значением в объекте
const obj1 = {
  apple: 10,
  banana: 20,
  cherry: 30,
  date: 25,
  intense: 62,
};

let max = 0;
let key = "";

Object.entries(obj1).map((pair) => {
  if (pair[1] > max) {
    max = pair[1];
    key = pair[0]
  };
})

// console.log(key);

// output: intense
// 12. Посчитать общее количество свойств в объекте
const obj2 = {
  apple: 10,
  banana: 20,
  cherry: 30,
  date: 25,
  intense: 62,
};

const arr2 = Object.keys(obj2);
// console.log(arr2.length);

// output: 5
// 13. Удалить все свойства с пустыми значениями
const obj3 = {
  name: 'Alice',
  age: null,
  email: '',
  city: 'New York',
  phone: undefined
};

Object.entries(obj3).map((pair) => {
  if (pair[1] === null || pair[1] === "" || pair[1] === undefined) {
    delete obj3[pair[0]];
  };
})

// console.log(obj3);

// output: { name: 'Alice', city: 'New York' }
// 14. Создать массив всех значений объекта
const obj4 = {
  apple: 10,
  banana: true,
  cherry: "dada",
  date: null,
};

const arr4 = [];
Object.keys(obj4).map(key => {
  arr4.push(obj4[key]);
})

// console.log(arr4)

// output: [10, true, "dada", null]
// 15. Объединить два объекта в один
// spread operator
const obj5_1 = {
  name: 'Alice',
  age: null,
  email: '',
  city: 'New York',
  phone: undefined
};
const obj5_2 = {
  apple: 10,
  banana: 20,
  cherry: 30,
  date: 25,
  intense: 62,
};

const obj5 = { ...obj5_1, ...obj5_2 }
// console.log(obj5);

const arr5_1 = [1, 2, 3, 4];
const arr5_2 = [5, 6, 7, 8];
const arr5 = [...arr5_1, ...arr5_2];
// console.log(arr5)

// 16. Удалить повторяющиеся значения из массива с использованием Set
const arr6 = [1, 2, 3, 4, 5, 6, 1, 2, 3, 7, 8, 3, 4, 9];
// arr => set => arr
const arr6_1 = [...new Set(arr6)];
// console.log(arr6_1);

// 17. Проверить, есть ли значение в Set
const set1 = new Set([1, 2, 3, 4, 5, 6, 2.5]);
// console.log(set1.has(2.5));

// 18. Подсчитать количество элементов в Set
const set2 = new Set([1, 2, 3, 4, 5, 6, 7]);
// console.log(set2.size)

// 19. Добавить и удалить элемент в Map
const map = new Map();
map.set(1, "val");
map.set(2, "lav");
map.delete(2);
// console.log(map);

// 20. Найти сумму всех значений в Map
const map2 = new Map([
  ["a", 20],
  ["b", 40],
  ["c", 60],
]);

let sum = 0;
for (let [key, value] of map2) {
  sum += value;
};

console.log(sum);
