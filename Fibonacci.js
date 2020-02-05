"use strict"

let number = 0;

function fibonacci(num) {

    let first = 1;
    let second = 1;
    let reply = 0;

    if (num == 0)
        return 0;
    if (num == 1 || num == 2)
        return 1;
    else {

        for (let i = 2; i < num; i++) {
            reply = first + second;
            first = second;
            second = reply;
        }
        return reply;
    }
}

do {
    number = prompt("Введите N-е число Фибоначчи", 0);
    if (number < 0 || number > 30) {
        alert("Число должно быть больше или равно 0 и меньше 30!");
    }
    if(isNaN(number)) {
        alert("Вы ввели не число ");
    }
} while (number < 0 || number > 30 || isNaN(number))

alert(fibonacci(number));

