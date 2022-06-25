// Задание 1
function getArrayParams(arr) {
    let min, max, sum, avg;
    min = Infinity;
    max = -Infinity;
    sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (min > arr[i]) {
            // если минимум меньше элемента массива, то минимум становится равен элементу
            min = arr[i];
        }
        if (max < arr[i]) {
            // если максимум больше элемента массива, то максимум становится равен элементу
            max = arr[i];
        }
        sum = sum + arr[i];
    }
    avg = sum / arr.length; // среднее значение
    avg = parseFloat(avg.toFixed(2));

    return { min: min, max: max, avg: avg };
}
console.log(getArrayParams([-99, 99, 10]));

// Задание 2
function worker(arr) {
    let sum;

    // Ваш код

    return sum;
}

function makeWork(arrOfArr, func) {
    let max;

    // Ваш кода
    // for ...

    return max;
}

// Задание 3
function worker2(arr) {
    // Ваш код
}
