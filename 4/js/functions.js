// Функция для проверки длины строки
const isMaxLength = (string = '', maxLength = 1) => (string.length <= maxLength);
isMaxLength('Кекс', 5);

// Функция для проверки, является ли строка палиндромом

// Решение #1
const isPalindrome = (line) => {
  line = line.replaceAll(' ', '').toUpperCase();
  const reverseLine = line.split('').reverse().join('');
  return line === reverseLine;
};
isPalindrome('Кекс ');

// Решение #2
// const isPalindrome = (line) => {
//   line = line.replaceAll(' ', '').toUpperCase();
//   let finish = 1;
//   const lastSimbol = line.charAt(line.length - finish);
//   for (let start = 0; lastSimbol === line[start]; start++){
//     finish++;
//     if (lastSimbol === line[start]) {
//       return true;
//     }
//   }
// };
// isPalindrome('5ёа на к кло5 ');
