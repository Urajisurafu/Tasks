"use strict"

let first;
let second;
let firstNum = [];
let secondNum = [];
let bulls = 0;
let cows = 0;

first = prompt("Введите первое число",1234);
second = prompt("Введите второе число",4231);

for(let i = 3; i >= 0; i--){

    firstNum[i] = Math.floor(first % 10);
    secondNum[i] = Math.floor(second % 10);
    first /= 10;
    second /= 10;
}
for(let i = 0; i < 4; i++){

    if(firstNum[i] == secondNum[i])
        bulls++;

    for(let j = 0; j < 4; j++){

        if(i == j)
            continue;
        if(firstNum[i] == secondNum[j])
            cows++;
    }
}

alert(`Кол-во быков - ${bulls}`);
alert(`Кол-во коров - ${cows}`);