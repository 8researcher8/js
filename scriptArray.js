'use strict'
// Задание № 1
// Из массива случайных чисел длиной 20 в диапазоне -50..50 выбрать отрицательные нечетные числа.


function getRandomArray(length, min, max) {
    var arr = [];
    for (var i = 0; i < length; i++) {
        arr[i] = getRandomNumber(min, max);
    }
    return arr;
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max + 1 - min)) + min;
}

var newArr = getRandomArray(20, -50, +50);
console.log(newArr);

// Выбрать отрицательные нечетные числа.
function negOdd(testArray) {
    var negOddArray = [];
    for (var i = 0, j = 0; i < testArray.length; i++) {
        if (testArray[i] < 0 && testArray[i] % 2) {
            negOddArray[j++] = testArray[i];
        }
    }
    return negOddArray;
}

console.log(negOdd(newArr));


// выведите максимальное значение
function maxValue(arrayMax) {
    var numberMax = arrayMax[0];
    for (var i = 0; i < arrayMax.length; i++) {
        if (numberMax < arrayMax[i])
            numberMax = arrayMax[i];
    }
    return numberMax;
}

console.log(maxValue(newArr));

// выбираем уникальное
var unArr = [1, 2, 3, 1, 3, 4, 5];
function getUniqueNumber(testArray) {
    var result = [],
        isUnique;

    for (var i = 0; i < testArray.length; i++) {
        isUnique = true;
        for (var j = 0; j < testArray.length; j++) {
            if (j === i)
                continue;
            if (testArray[i] === testArray[j]) {
                isUnique = false;
                break;
            }
        }
        if (isUnique)
            result.push(testArray[i]);
    }
    return result;
}

console.log(getUniqueNumber(unArr));