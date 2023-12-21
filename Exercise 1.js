// Задание 1
const result = +prompt("Введите любое значение")
if(isNaN(result) || typeof(result) !== "number"){
alert("Упс, кажется, вы ошиблись")
} else if (result % 2 === 0) {
  alert("Число четное")
} else {
  alert("Число нечетное")
}