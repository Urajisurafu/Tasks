"use strict"

let string;
let size;
let cache;


function truncate(str, maxlength) {
    return (str.length > maxlength) ?
        str.slice(0, maxlength - 1) : str;
}

string = prompt("Введите строку","abcabcabcabc");
size = prompt("Введите число",1);

if(size > 0) {
    cache = string.repeat(size);
}

if(size < 0) {
    let substringLength = 1;//длина найденой строки
    let check;//сколько раз подстрока встречается в строке
    let length;//для массива
    let word1;//поиск с начала строки
    let word2;//поиск с конца строки
    let number;//сколько раз выводить
    let arr;
    arr = string.split('');

    length = string.length - 1;
    word1 = arr[0];
    word2 = arr[length];

    for (let i = 1; i < string.length; i++) {
        if(word1 == word2) {
            cache = word1;
            break;
        }
        word1 = word1 + arr[i];
        word2 = arr[length - i] + word2;
        substringLength++;
    }
    check = string.length / substringLength;

    size *= -1;

    if(size > check || check == 1)
        cache = "NO SOLUTION";
    else{
        number = Math.floor(Math.pow(check, (1/size)));
        cache = cache.repeat(number);
    }
}

alert( truncate(cache, 1023));