'use strict';
function compareArrays(arr1, arr2) {
    let result = res(arr1, arr2);
    function res(a, b) {
        if (
            a.length === b.length &&
            a.every((element, index) => element === b[index])
        ) {
            return true;
        } else {
            return false;
        }
    }
    return result; // boolean
}

function advancedFilter(arr) {
    let resultArr = arr
        .filter((item) => item > 0)
        .filter((item) => item % 3 === 0)
        .map((item) => item * 10);

    // фильтр сначала выделяет только положительные числа. потом только те, что кратые трем. потом метод map умножает на 10

    return resultArr; // array
}
