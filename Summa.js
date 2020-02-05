"use strict"

let number = 0;
let sum = 0;

do {
    number = prompt("Введите число", 2);
    if(number > Math.pow(10,4))
        alert("Число должно быть меньше 10^4");
    if(number < 1)
        alert("Число должно быть больше единицы");
    if(isNaN(number))
        alert("Вы ввели не число ")
}while(number < 1 || number > Math.pow(10,4) || isNaN(number))

for(let i = 1; i <= number;i++){

    sum += i;
}

alert(sum);