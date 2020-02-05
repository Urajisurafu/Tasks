"use strict"

let size;
let array = [];
let answer = 1;

do {
    size = prompt("Сколько чисел хотите ввести?", 1);

    if(size < 3 || size > Math.pow(10,6) || isNaN(size))
        alert("Введены некорректные данные");

}while(size < 3 || size > Math.pow(10,6) || isNaN(size))

for(let i = 0; i < size;i++){

    do
    {
        array[i] = prompt("Введите число", 0);
        if(isNaN(array[i]))
            alert("Необходимо ввести число!");
    }while(isNaN(array[i]))
}

array.sort( (a, b) => a - b );

for(let i = size - 1; i > size - 4;i--){

    answer *= array[i];
}

alert(answer);