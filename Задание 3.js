
// Дана строка. Необходимо вывести в консоль перевёрнутый вариант. Например, "Hello" -> "olleH".


let str = "Hello";
let reverse = str.split('').reverse().join('');
console.log(reverse);
