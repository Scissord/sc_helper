// Conditions
// if else
// switch

// Cycles
// for
// while
// do while

// Array
// toUpperCase()

// Numbers
// 1. Является ли введенное число четным или нечетным.
// 2. Найти самое большое число в массиве
// 3. Найти сумму всех чисел в массиве
// 4. Найти среднее арифметическое элементов массива
// 5. Найти количество четных чисел в массиве
// 6. Развернуть массив (наоборот)
// 7. Найти минимальное значение в массиве
// 8. Подсчитать количество элементов больше заданного числа
// 9. Создать новый массив из квадратов чисел
// 10. Проверить, есть ли число в массиве
// 11. Найти произведение всех чисел в массиве
// 12. Удалить все четные числа из массива
// 13. Подсчитать количество отрицательных чисел в массиве
// 14. Найти индексы всех вхождений заданного числа в массиве
// 15. Создать массив с элементами, умноженными на их индексы
// 16. Удалить повторяющиеся элементы из массива
// 17. Найти второй по величине элемент в массиве
// 18. Определить, является ли массив палиндромом
// 19. Подсчитать сумму чисел на четных индексах
// 20. Поменять местами максимальное и минимальное значения в массиве

// String Arrays
// 1. Подсчитать количество гласных в строке
// const strings1 = ['A', 'b', 'c', 'd', 'e'];

// function countVowels(strings) {
//   const vowels = /[aeiou]/i;
//   let vowelCount = 0;

//   strings.forEach(char => {
//     if (vowels.test(char)) {
//       vowelCount++;
//     }
//   });

//   return vowelCount;
// }

// console.log(countVowels(strings1));
// 2. Удалить все пробелы из строки
// const strings2 = ['fxck this trim me!', 'me too', 'and mee'];

// function removeSpaces(strings) {
//   return strings.map(str => str.replace(/\s/g, ''));
// }

// const result = removeSpaces(strings2);
// console.log(result);
// 3. Найти самое длинное слово в строке
const strings3 = ['kotak', 'nedokotak', 'perekotak'];
// function findLongestWord(strings) {
//   let longestWord = '';

//   strings.forEach(word => {
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   });

//   return longestWord;
// }

// const result = findLongestWord(strings3);
// console.log(result);
// 4. Проверить, является ли строка палиндромом
// const strings4 = ['шалаш', 'нешалаш', 'казак'];

// function isPalindrome(strings) {
//   return strings.map(str => {
//     const reversed = str.split('').reverse().join('');
//     return str === reversed;
//   });
// }

// const result = isPalindrome(strings4);
// console.log(result);
// 5. Подсчитать количество слов в строке
// const strings5 = [
//   'Сколько слов в этой строке?',
//   'А в этой строке три слова.',
//   'Здесь всего одно.'
// ];
// function countWords(strings) {
//   return strings.map(str => str.split(/\s+/).filter(word => word.trim() !== '').length);
// }

// const result = countWords(strings5);
// console.log(result);
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
