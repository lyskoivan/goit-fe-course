'use strict'
const newArray = [];
const fn = function (elements, callback) {
    for (const element of elements) {
        const result = callback(element);
        newArray.push(result);
    }
    return newArray;
};
const sortOut = function (num) {
    return num * 2;
};
const array = [1,2,3,4,5];
console.log(fn(array, sortOut));