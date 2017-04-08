var newDate = new Date();
text = "Год сейчас - " + newDate.getFullYear();
text += "\nМесяц сейчас - " + newDate.getMonth();
text += "\nДень сейчас - " + newDate.getDate();
text += "\nЧасов сейчас - " + newDate.getHours();
text += "\nМинут сейчас - " + newDate.getMinutes();
text += "\nСекунд сейчас - " + newDate.getSeconds();
// console.log(text);

var year1 = prompt("Введите год, на проверку высокосный ли он?!", "2000");

function leap(year) {
    var newDate2 = new Date(year, 1, 29);
    // console.log(newDate2);
    if (newDate2.getDate() === 29 && newDate2.getMonth() === 1) {
        return "29 Февраля существует, значит год високосный";
    }
        return "29 Февраля не существует, значит год не високосный";
}

alert(leap(year1));