"use strict"

let coins1 = 0;
let coins2 = 0;
let coins3 = 0;
let max = 0;

coins1 = prompt("Введите кол-во монет в первой куче",1);
coins2 = prompt("Введите кол-во монет во второй куче",1);
coins3 = prompt("Введите кол-во монет в третьей куче",1);

if(coins1 > coins2)
    max = coins1;
else
    max = coins2;
if(max < coins3)
    max = coins3;

alert(max);