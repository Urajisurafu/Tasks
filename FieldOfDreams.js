"use strict"

let size = 0;
let array = [];
let answer = 0;

size = prompt ("Сколько чисел хотите ввести?",1);

for(let i = 0; i < size;i++){

    array[i] = prompt("Введите число",1);
}

let set = new Set(array);

for (let value of set) answer++;

alert(answer);
