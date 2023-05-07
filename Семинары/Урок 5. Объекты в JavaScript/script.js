// const week = {
//     1: "Понедельник",
//     2: "Вторник",
//     3: "Среда",
//     4: "Четверг",
//     5: "Пятница",
//     6: "Суббота",
//     7: "Воскресение",
//     };
// console.log(week[2]);

// const user = {
//     name: "Иван",
//     surname: "Коровянский",
//     age: 19,
// }
// console.log(user.name,'-',user.surname,'-',user.age);  // // (`${user.name} - ${user.surname} - ${user.age}`)

// function User (name, surname) {
//     this.name = name;
//     this.surname = surname;
// }

// const name = 'Ivan';
// const surname = 'Korovyanskiy';

// const person = new User(name, surname)
// console.log(person);


// user.middleName = prompt('Введите отчество');
// console.log(user);

// delete user.surname;

// console.log(user);

// 2 задание

// const arr1 = ['пн','вт','ср','чт','пт','сб','вс'];
// const arr2 = [1,2,3,4,5,6,7];

// const res = arr1.concat(arr2);
// console.log(res);

// const week = {};
// for (let i = 0; i < arr1.length; i++) {
//     // let key = arr1[i];
//     // let value = arr2[i];
//     // week[key] = value;
//     week[arr1[i]] = arr2[i];
    
// }
// console.log(week);



// const obj = {
//     x: 1,
//     y: 2,
//     z: 3,
// }

// for (let key in obj) {
//     obj[key] *= obj[key]; // = obj[key] ** 2
// }
// console.log(obj);


// 3 задание

// const obj = {
//     key1: {
//         key1: 1,
//         key2: 2,
//         key3: 3,
//     },
//     key2: {
//         key1: 4,
//         key2: 5,
//         key3: 6,
//     },
//     key3: {
//         key1: 7,
//         key2: 8,
//         key3: 9,
//     },
// }

// // let sum = 0;
// // for (let key in obj) {
// //     for (let innerKey in obj[key]){
// //         sum += obj[key][innerKey]
// //     }
// // }

// // console.log(sum);

// const values = Object.values(obj);

// const resValues = values.reduce((acc, el) => acc.concat(Object.values(el)), []).reduce((acc, val) => acc + val, 0)

// // const resValues = [].concat(...values.map((el) => Object.values(el)) ).reduce((acc, val) => acc + val, 0)
// console.log(resValues);

const riddles = {
    question: 'Зимой и летом одним цветом',
    answer: 'Ель',
    askQuestion: function () {
        const userAnswer = prompt(this.question)
        if (userAnswer.toLowerCase() === this.answer.toLowerCase()){
            alert('Молодец');
        } else {
            alert('Не угадал');
            const hint1 = 'Растет в лесу';
            const hint2 = 'Ее наряжают на нг';
            alert(hint1);
            alert(hint2);
        }

    }
}
riddles.askQuestion()