"use strict"

let numberBridges = 0;

function checkCrash(numberBridge) {

    let bridgeHeight = 0;
    let crash = 0;
    const busHeight = 437;

    for (let i = 0; i < numberBridge; i++) {

        do {
            bridgeHeight = +prompt("Введите высоту моста", 500);
            if (bridgeHeight < 0) {
                alert("Высота моста не может быть отрицательной!");
            }
            if (bridgeHeight > 10000) {
                alert("Высота моста не должна превышать 10000!");
            }
            if(isNaN(bridgeHeight)) {
                alert("Вы ввели не число ");
            }

        } while (bridgeHeight < 0 || bridgeHeight > 10000 || isNaN(bridgeHeight))
        if (bridgeHeight <= busHeight) {
            crash = i + 1;
            return `Crash ${crash}`;
        }
    }
    return "No crash";
}

do {

    numberBridges = +prompt("Сколько мостов на пути?", 1);
    if (numberBridges < 0) {
        alert("Количество мостов не может быть отрицательным!");
    }
    if (numberBridges > 1000) {
        alert("Количество мостов не может быть больше 1000!");
    }
    if(isNaN(numberBridges)) {
        alert("Вы ввели не число ");
    }

} while (numberBridges < 0 || numberBridges > 1000 || isNaN(numberBridges))

alert(checkCrash(numberBridges));

