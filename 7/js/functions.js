// // Функция для проверки длины строки
// const isMaxLength = (string = '', maxLength = 1) => (string.length <= maxLength);
// isMaxLength('Кекс', 5);

// // Функция для проверки, является ли строка палиндромом

// // Решение #1
// const isPalindrome = (line) => {
//   line = line.replaceAll(' ', '').toUpperCase();
//   const reverseLine = line.split('').reverse().join('');
//   return line === reverseLine;
// };
// isPalindrome('Кекс ');

// // Решение #2
// // const isPalindrome = (line) => {
// //   line = line.replaceAll(' ', '').toUpperCase();
// //   let finish = 1;
// //   const lastSimbol = line.charAt(line.length - finish);
// //   for (let start = 0; lastSimbol === line[start]; start++){
// //     finish++;
// //     if (lastSimbol === line[start]) {
// //       return true;
// //     }
// //   }
// // };
// // isPalindrome('5ёа на к кло5 ');

// // 5.16. Функции возвращаются

// // имяФункции('08:00', '17:30', '14:00', 90); // true
// // имяФункции('8:0', '10:0', '8:0', 120);     // true
// // имяФункции('08:00', '14:30', '14:00', 90); // false
// // имяФункции('14:00', '17:30', '08:0', 90);  // false
// // имяФункции('8:00', '17:30', '08:00', 900); // false

// const convertHourstoMinute = (timeNormalFormat) => {
//   const [hours, minutes] = timeNormalFormat.split(':');
//   return (+hours * 60) + (+minutes);
// };

// const isNormalTime = (startWorkDay, finishWorkDay, startMeeting, durationMeeting) => {
//   const getMinStartWorkDay = convertHourstoMinute(startWorkDay);
//   const getMinFinishWorkDay = convertHourstoMinute(finishWorkDay);
//   const getMinStartMeeting = convertHourstoMinute(startMeeting);
//   if (getMinStartMeeting < getMinStartWorkDay || getMinStartMeeting > getMinFinishWorkDay) {
//     return false;
//   }
//   if ((getMinFinishWorkDay - getMinStartMeeting) < durationMeeting) {
//     return false;
//   }
//   if ((getMinFinishWorkDay - getMinStartWorkDay) < durationMeeting) {
//     return false;
//   } else {
//     return true;
//   }
// };

// isNormalTime('08:00', '17:30', '14:00', 90);
