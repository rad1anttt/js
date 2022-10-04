// Получить случайное число от 0 до size -1
var getRandomNumber = function (size) {
    // Округлить случайное число
    return Math.floor(Math.random() * size);
};
//Расстояние от нашего нажатия до клада
var getDistance = function (event, target) {
    // Расстояние по горизонтали
    var diffX = event.offsetX - target.x;
    // Расстояние по вертикали
    var diffY = event.offsetY - target.y;
    // Расстояние между двумя точками
    return  Math.sqrt ((diffX * diffX) + (diffY * diffY ));
};
//Получить для расстояния строку подсказки
var getDistanceHint = function (distance) {
    // Если расстояние меньше 10
    if (distance < 10) {
        return "Обожжешься!";
    // Если расстояние меньше 20 
    } else if (distance < 20) {
         return "Очень горячо!";
    // Если расстояние меньше 40
    } else if (distance < 40) {
        return "Горячо!";
    // Если расстояние меньше 80
    } else if (distance < 80) {
         return "Тепло!";
    // Если расстояние меньше 160
    } else if (distance < 160) {
         return "Холодно!";
    // Если расстояние меньше 320
    } else if (distance < 320) {
         return "Очень холодно!";
    // Если расстояние меньше 480
    } else if (distance < 480) {
        return "Очень-очень холодно!";
    // Если расстояние больше 480
    } else {
         return "Замерзнешь!";
    }
};
//Создание переменных ширина, высота, клики
var width = 800;
var height = 800;
var clicks = 0;
//Создание случайной позиции клада
var target = {
// Создание позиции по горизонтали
x: getRandomNumber(width),
// Создание позиции по вертикали
y: getRandomNumber(height)
};
//Создание обработки кликов
$("#map").click(function (event) {
    clicks++;
    //Получение расстояние от места клика до клада
    var distance = getDistance(event,target);
    //Получение подсказки
    var distanceHint = getDistanceHint(distance);
    // Записываем в элемент #distance новую подсказку
    $("#distance").text(distanceHint);
    //Если клик был достаточно близко, пользователь победил
    if (distance < 8) {
        alert("Клад найден! Сделано кликов: " + clicks)
    }
    // Если был превышен лимит кликов, пользователь проиграл
    if (clicks > 100) {
        alert("Вы превысили количество допустимых кликов. Игра окончена")
    }
    // Создание уведомления о количестве кликов до проигрыша после подсказки холодно
    if (distance < 160) {
        var lose = 100-clicks;
        alert("До проигрыша осталось: " + lose + " кликов")
    }
});