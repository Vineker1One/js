// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число



// for (let number = 0; number < 11; number++) {
//     if (number == 0) {
//         console.log(`${number} - Это ноль`);
//     }
//     if (number % 2 == 0 ) {
//         console.log(`${number} - число четное`);
//     } else  {
//         console.log(`${number} - число нечетное`);
//     }
// }


// for(let i = 0; i <= 10; i++) {
//     if (i == 0) { console.log(`${i} - это ноль`) }

//     else { console.log(`${i} - это ${i % 2 == 0 ? "четное" : "нечетное"} число`) }
// }
    

// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

// arr = [1, 2, 3, 4, 5, 6, 7]
// arr.splice(3, 2)
// console.log(arr)


// // Задание 3
// // Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// // 1. Рассчитать сумму элементов этого массива
// // 2. Найти минимальное число
// // 3. Найти есть ли в этом массиве число 3


const arr = [];

for (let index = 0; index < 5; index++) {
    arr.push(Math.round(Math.random() * 10))
}
 console.log(arr);

function min ([]) {
    let min = 10;
    for (let i = 0; i < arr.length; i++) {
        let e = arr[i];
        if (e < min) {
        min = e; 
        }

     }
}

console.log(min(arr));












// arr = []
// for (let i = 0; i < 5; i++) {
// arr.push(Math.round(Math.random() * 10))
// }

// console.log("Массив: " + arr)

// // Сумма элементов
// let sum = 0
// arr.forEach(e => {sum = sum + e})
// console.log("Сумма: " + sum)

// // Минимальное значение
// let min = 10
// arr.forEach(e => {if (e < min) {min = e} })
// console.log("Минимум: " + min)

// // Число 3
// console.log('В массиве ' + (arr.includes(3) ? "есть" : "нет") + " 3")

// // *Необязательное задание. *
// // Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:

// for (let i = 0; i <= 20; i++) {
//     console.log("#".repeat(i))
//     }