'use strict';
function solveEquation(a, b, c) {
    let arr = [];
    let discriminant = Math.pow(b, 2) - 4 * a * c; // переменная для вычисления дискриминанта
    if (discriminant === 0) {
        // если дискриминант равен нулю, то возвращаем один корень
        let square = -b / (2 * a);
        arr.push(square);
    } else if (discriminant > 0) {
        // если дискриминант больше нуля
        let square = (-b + Math.sqrt(discriminant)) / (2 * a); // первый корень
        let squareTwo = (-b - Math.sqrt(discriminant)) / (2 * a); // второй корень
        arr.push(square, squareTwo);
    }
    return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
    let totalAmount;

    // код для задачи №2 писать здесь

    return totalAmount;
}
