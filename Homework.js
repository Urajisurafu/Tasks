"use strict"

let size;
let numbers = [];
let sum = 0;
let maxPosition = 0;
let minPosition = 0;
let max;
let min;

size = prompt("Сколько чисел вы хотите ввести?",0);

for(let i = 0;i < size;i++){

    numbers[i] = +prompt("Введите число массива",0);

}

max = numbers[0];
min = numbers[0];

for(let i = 0;i < size;i++){

    if(numbers[i] > 0)
        sum += numbers[i];

    if(max < numbers[i]) {
        maxPosition = i;
        max = numbers[i];
    }
    if(min > numbers[i]) {
        minPosition = i;
        min = numbers[i];
    }
}

if(minPosition < maxPosition )
    numbers = numbers.slice(minPosition + 1,maxPosition);
else
    numbers = numbers.slice(maxPosition + 1,minPosition);

let result = numbers.reduce((mul, current) => mul * current)

alert(sum);
alert(numbers);
alert(result);