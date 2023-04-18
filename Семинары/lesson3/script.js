// function name() {
//     const fio = prompt('Введитие ваше ФИО: ');
//     const age = prompt('Введите ваш возраст: ');
//     return (`Привет ${fio} c возрастом ${age}`);
// }
// console.log(name());

// function greet(firstName, surname, age) {
//     return (`Привет ${firstName} ${surname} c возрастом ${age}`)
// }
// console.log(greet('Ivan', 'Korovyanskiy', '19'));

// const greet = (firstName, surname, age) => {
//     return (`Привет ${firstName} ${surname} c возрастом ${age}`)
// }
// console.log(greet('Ivan', 'Korovyanskiy', '19'));
// --------------------------------------------------

// function square () {
//     const num = Number(prompt('Введите число'));
//     const num2 = num * num;
//     return num2;
// }
// console.log(square());

// function sqNumber(num) {
//     return num * num

// }
// console.log(sqNumber(4));

//---------------------------------------------------

// function signNum () {
//     const num = Number(prompt('Введите число'));
//     if (num > 0) {
//         alert('+++')
//     }
//     else if (num < 0){
//         alert('---')
//     }
//     else {
//         alert('равно 0')
//     }

// }
// console.log(signNum());
//--------------------------------------------------

// function sumSquare (num1, num2) {
//     const sq1 = num1 * num1;
//     const sq2 = num2 * num2;
//     return sq1 + sq2;
// }

// console.log(sumSquare(3,4));

//--------------------------------------------------

// function getDay(day) {
//     switch (day) {
//         case 1:
//             return "Понедельник";
//             break;
//         case 2:
//             return "Вторник";
//             break;
//         case 3:
//             return "Среду";
//             break;
//         case 4:
//             return "Четверг";
//             break;
//         case 5:
//             return "Пятница";
//             break;
//         case 6:
//             return "Суббота";
//             break;
//         case 7:
//             return "Воскресенье";
//             break;
//         default:
//             return "Error";
//             break;
//     }
// }
// console.log(getDay());

//--------------------------------------------------

function greet (name) {
    const now = new Date();
    const hour = now.getHours();
    if(hour >= 6 && hour < 12) {
        return `Good Morning, ${name}`
    }
    else if(hour >= 12 && hour < 18) {
        return `Good Day, ${name}`
    }
    if(hour >= 18 && hour < 22) {
        return `Good Evening, ${name}`
    }
    else {
        return `Good Night, ${name}`
    }
}

console.log(greet('Ivan'));