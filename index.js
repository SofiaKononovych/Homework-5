let time;

if (confirm("Есть ли вам 18 лет?") === false) {
    alert("Вам запрещено проходить опрос");
} else {
    time = +prompt("Во сколько вы встаете?", "");
    if (isNaN(time)){
        alert("Некорректный ввод");
    } else{
        if (time > 0 && time <= 5){
            alert("Очень рано");
        } else if (time > 5 && time <= 8){
            alert("Всё равно рано");
        } else if (time > 8 && time <= 11) {
            alert("Нормально");
        } else if (time > 11 && time <= 14) {
            alert("Слишком поздно");
        } else if (time > 14 && time <= 24 ) {
            alert("Очень-очень поздно");
        } else if (time <= 0 || time > 24){
            alert("Научись пользоваться часами!");
        }

    }
}
