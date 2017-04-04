var newArr = ["яблоко", "11", "английский", "груша", "ворона", "ананас", "4", "апельсин", "ворон", "а", "Япония", "Англия", "255"];

function sortArr(arr) {
    var lowerArr = [];
    for (var i = 0; i < arr.length; i++){
        arr[i] = arr[i].toLowerCase();
        lowerArr[i] = arr[i];
        // if (isNumeric(lowerArr[i])){
        //     lowerArr[i] = +lowerArr[i];
        // }
    }
    lowerArr.sort(function (item1, item2) {
        if (isNumber(item1) && isNumber(item2))
            return item1 - item2;
        else
            return item1.toLowerCase() > item2.toLowerCase();
    });
    return lowerArr;
}

function isNumber(number) {
    return !isNaN(parseFloat(number)) && isFinite(number);
}

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
var newSortArray = sortArr(newArr);
console.log(newSortArray);
