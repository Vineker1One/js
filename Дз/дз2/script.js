// 1 задание

// let num1 = 2;
// let num2 = 1;
// if (num1 <= 1) {
//     console.log(`Число ${num1} равно или меньше 1`);
// } else {
//     console.log(`Число ${num1} не равно или меньше 1`);
// }
// if (num2 >= 3) {
//     console.log(`Число ${num2} больше или равно 3`);
// } else {
//     console.log(`Число ${num2} не равно или больше 3`);
// }

// 2 задание

// let test = true;
// console.log((test === true) ? '+++' : '---');

// 3 задание

// let day = Math.ceil(Math.random() * 31);
// console.log(day);
//     if (day <= 10) {
//         console.log('1 декада');
//     } 
//     else if ( day >= 11 && day <=20 ){
//         console.log('2 декада');
//     }
//     else {
//         console.log('3 декада');
//     }

// 4 задание

const userNum = +prompt('Введите число')
const units = userNum % 10;
const tens = Math.trunc(userNum / 10) % 10;
const hundred = Math.trunc(userNum / 100) % 10;
console.log(`В число ${userNum} количество сотен ${hundred}, десятков: ${tens}, единиц: ${units}`);
