// const pEl = document.querySelector('#block p:first-child');
// console.log(pEl);
// const text = document.querySelector('.www');
// console.log(text);
// const www = document.getElementsByClassName('www');
// const pOne = www[0];
// console.log(pOne);


// const link = document.querySelector('.link');
// link.textContent = 'link text js'
// link.setAttribute('href', 'https://developer.mozilla.org/ru/');
// const img = document.querySelector('.photo');
// img.setAttribute('src', 'https://do.rsue.ru/pluginfile.php/1/core_admin/logocompact/300x300/1669043707/logo_rsue_24.png')
// img.src = 'https://do.rsue.ru/pluginfile.php/1/core_admin/logocompact/300x300/1669043707/logo_rsue_24.png'


// const contentDiv = document.querySelector('.content');
// const newP = document.createElement('p');
// newP.textContent = 'Новый текстовый элемент';
// contentDiv.appendChild(newP)
// contentDiv.removeChild(newP)


// const contentDiv = document.querySelector('.content');
// const newBut = document.createElement('button');
// newBut.textContent = 'Купить';
// contentDiv.appendChild(newBut);
// let clickCount = 0;
// newBut.addEventListener('click',() => {
//     clickCount++;
//     console.log(`Количество кликов по кнопке ${clickCount}`);    
// })

// const resetBut = document.createElement('button');
// resetBut.textContent = 'Сброс счетчика';
// contentDiv.appendChild(resetBut);
// resetBut.addEventListener('click',() => {
//     clickCount = 0;
//     console.log('Счетчик обнулен');
// })


const contentDiv = document.querySelector('.content');
const button = document.createElement('button');
button.textContent = 'Отправить';
contentDiv.appendChild(button);
button.addEventListener('click', () => {
    button.textContent = 'Текст отправлен';
    setTimeout(() => {
        button.textContent = 'Отправить'
    }, 1000);
})