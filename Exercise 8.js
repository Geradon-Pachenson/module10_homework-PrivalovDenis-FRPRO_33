//Задание 8
let firstMap = new Map([
    ["1", "Иван"],
    [2, "Денис"],
    [false, "Оля"],
    [null, 0]
]);
firstMap.forEach((value, key, map) => {
    console.log(`Ключ - ${key}, Значение - ${value}`);
});