// const array = [1, 2, 3];
// console.log(array[0], array[1], array[2]);

// for(const prop of array) { // ForOf - перебор значений в объекте (числа в массиве); ForIn - перебор свойств в объекте (индексы в массиве)
//     console.log(typeof(prop));
// }

// const array = [1, 2, 3, 'fSf', 34, 12];
// console.log(array.length);

// const array = ['a', 'b', 'c'];
// console.log(array);
// array[0] = 1;
// array[1] = 2;
// array[2] = 3;
// console.log(array);

// ----------------------- ЗАДАНИЕ 2

// const arr = [1, 2, 3];
// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i] + 1;
//     arr[i] = element;
// }
// console.log(arr);

// const arr = [1, 2, 3];
// arr.forEach((element, index) => arr[index]++);
// console.log(arr);

// const arr =[1, 2, 3];
// const res = arr.map((el) => el + 1)
// console.log(res);

// const arr =[1, 2, 3, 4, 5];
// const res = arr.reduce((F, el) => F + el); // F - аккумулирующее значение; вторая берет значение элемента
// console.log(res);

//--------------------------

// const arr = [];
// arr[3] = 'a';
// arr[8] = 'b';
// console.log(arr.length);

// const arr = [1, 2, 3];
// arr.push(4);
// arr.push(5);
// console.log(arr);

// const arr = [1, 2, 3, 4, 5];
// arr.splice(1, 2)
// console.log(arr);

// for (let number = 0; number <= 99; number++) {
//     if (number % 2 == 1) {
//         console.log(number);
//     }
// }

// for (let index = 100; index >= 0; index--) {
//     console.log(index);

// }

// let num = 4;
// let count = 0;
// while (num <= 1000) {
// num = num * 3;
// count++;
// }
// console.log(count);

// --------------------------------

// const arr = [2, 5, 9, 15, 1, 4]

// const res = arr.filter((num) => num > 3 && num < 10)
// console.log(res);

// const arr = [2, 5, 9, 15, 1, 4]

// arr.filter((num) => num > 3 && num < 10).forEach((num) => console.log(num));

// --------------------------------

// const sum = Array.from({length: 50}, (_, i) => 2 + i * 2).reduce((acc, num) => acc + num, 0);
// console.log(sum);

// let stringNum2 = "-";
// const arr = [2, 5, 9, 3, 1, 4];
// for (let i = 0; i < arr.length; i++) {
//     stringNum2 += `${arr[i]}-`;
// }
// console.log(stringNum2);

// let stringNum = "-";
// for (let i = 1; i < 10; i++) {
// stringNum += `${i}-`;
// }
// console.log(stringNum);

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(arr.join('-'));

// const array = [2, 5, 9, 0, 3, 1, 4];
// for (let index = 0; index < array.length; index++) {
//     if (array[index] !== 0) {
//         console.log(array[index]);
//     }
//     else break;

// }

// --------------------------

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let index = 0; index < array.length; index++) {

//     if (array[index] % 2 == 0) {
//         let sub = Math.pow(array[index],2);
//         console.log(`Число ${array[index]} делится на 2 = ${sub}`);
//     }
//     if (array[index] % 3 == 0) {
//         let sub = Math.pow(array[index],3);
//         console.log(`Число ${array[index]} делится на 3  = ${sub}`);
//     }

// }
// let count = 0;
// const array = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
// for (let i = 0; i < array.length; i++) {
//     if (array[i] == 3) {
//         count++
//     }
// }
// console.log(count);

const array = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
const count = array.reduce((acc, num) => num === 3 ? acc+1 : acc, 0)
console.log(count);


// const array = [1, 2, 3, 4, 5];
// const arr = array.splice(1,2)
// console.log(array);
