"use strict"

let a = 0;
let b = 0;
let c = 0;

function check10_2(x) {
    if (x > Math.pow(10, 2))
        alert("Введённое число не должно быть больше 10^2")
    if (x <= 0)
        alert("Число должно быть натуральным")
    if (isNaN(x))
        alert("Введите число!")
}

do {

    a = +prompt("Введите первое число(число А)", 1);
    check10_2(a);

} while (a > Math.pow(10, 2) || a <= 0 || isNaN(a))

do {

    b = +prompt("Введите второе число(число B)", 1);
    check10_2(b);

} while (b > Math.pow(10, 2) || b <= 0 || isNaN(b))

do {

    c = +prompt("Введите третье число(число С)", 1);
    if (c > Math.pow(10, 6))
        alert("Введённое число не должно быть больше 10^6")
    if (c <= 0)
        alert("Число должно быть натуральным")
    if (isNaN(c))
        alert("Введите число!")

} while (c > Math.pow(10, 6) || c <= 0 || isNaN(c))

(a * b == c) ? alert("Yes") : alert("No");