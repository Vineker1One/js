console.log("Текст из js")
const tempCelsius = prompt ('Введите температуру в Цельсиях');
const tempFahrenheit = (9 / 5) * tempCelsius + 32;
alert(`Цельсий: ${tempCelsius}, Фаренгейт: ${tempFahrenheit.toFixed(1)}`);