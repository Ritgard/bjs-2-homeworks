// Задание 1
function getArrayParams(arr) {
    let min, max, sum, avg;
    min = Infinity;
    max = -Infinity;
    sum = 0;

    for (item of arr) {
        // если минимум меньше элемента массива, то минимум становится равен элементу
        if (min > item) min = item;
        if (max < item) max = item;
        // если максимум больше элемента массива, то максимум становится равен элементу
        sum = sum + item;
    }
    avg = sum / arr.length; // среднее значение
    avg = parseFloat(avg.toFixed(2));

    return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
    let sum = 0;
    for (item of arr) {
        // в теле цикла складываются все числа массива и записываются в переменную sum
        sum += item;
    }
    return sum;
}

function makeWork(arrOfArr, func) {
    let max = 0;

    for (let i = 0; i < arrOfArr.length; i++) {
        // цикл проходится по всем массивам вычисляя с помощью функции worker сумму массива, если она больше предыдущей, то это число записывается в переменную max
        if (func(arrOfArr[i]) > max) max = func(arrOfArr[i]);
    }
    return max;
}

// Задание 3
function worker2(arr) {
    let min = Infinity;
    let max = -Infinity;
    let difference = 0; // разность чисел

    for (item of arr) {
        if (min > item) min = item;
        // если минимум меньше элемента массива, то минимум становится равен элементу
        if (max < item) max = item;
        // если максимум больше элемента массива, то максимум становится равен элементу
    }
    difference = max - min;
    difference = Math.abs(difference);
    return difference;
}
