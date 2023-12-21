//Задание 4
function randomNumber(min, max) {
    let rest = min + Math.random() * (max + 1 - min);
    return Math.floor(rest);
}
alert( randomNumber(0, 100) );