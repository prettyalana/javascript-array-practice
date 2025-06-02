"use strict";
// 1.
function createANewArray(string, count) {
    let array = [];
    for (let i = 0; i < count; i++) {
        array.push(string);
    }
    return array;
}
const newArray = createANewArray("sunshine", 3);
console.log(newArray);
// 2.
function reverseValues(array) {
    const newArray = array.reverse();
    return newArray;
}
const reversedValue = reverseValues([1, 2, 3, 4, 5]);
console.log(reversedValue);
// 3.
function removeFalsyValues(array) {
    const newArray = [];
    for (const element of array) {
        if (element) {
            newArray.push(element);
        }
    }
    return newArray;
}
const trueValueArray = removeFalsyValues(["", "Alana", 1, null, 0]);
console.log(trueValueArray);
