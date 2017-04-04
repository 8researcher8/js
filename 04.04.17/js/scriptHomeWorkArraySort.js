var newArr = ["яблоко", "11", "английский", "груша", "ворона", "ананас", "4", "апельсин", "ворон", "а", "Япония", "Англия", "255"];

function sortArr(arr) {
    var lowerArr = [];
    for (var i = 0; i < arr.length; i++){
            arr[i] = arr[i].toLowerCase();
            lowerArr[i] = arr[i];
    }
    lowerArr.sort();
    return lowerArr;
}
var newSortArray = sortArr(newArr);

// console.log(isNumeric(newSortArray[0]));

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
console.log(newSortArray);
