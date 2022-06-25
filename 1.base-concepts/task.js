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
    // процентная ставка, сумма первоначального взноса, сумма кредита, дата окончания кредита

    let bodyCredit = amount - contribution; // тело кредита

    let startPayCredit = Date.now(); // текущая дата
    let endPayCredit = +date; // конец оплаты кредита
    let loanTerm = Math.trunc(
        (endPayCredit - startPayCredit) / 1000 / 60 / 60 / 24 / 30
    ); // сколько месяцев платить кредит до текущей даты

    let monthPayment =
        bodyCredit *
        (percent / 1200 +
            percent / 1200 / ((1 + percent / 1200) ** loanTerm - 1));
    // ежемесячная оплата

    let generalSum = monthPayment * loanTerm; // общая сумма которую нужно заплатить клиенту
    let totalAmount = +generalSum.toFixed(2);

    return totalAmount;
}
