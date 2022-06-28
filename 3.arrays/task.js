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
    let resultArr;

    // Ваш код

    return resultArr; // array
}
