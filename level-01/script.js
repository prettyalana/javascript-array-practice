"use strict";
// 1.
function createANewArray(string, count) {
    let array = [];
    for (let i = 0; i < count; i++) {
        array.push(string);
    }
    return array;
}
const new_array = createANewArray("sunshine", 3);
console.log(new_array);
// 2.
function reverseValues(array) {
    const new_array = array.reverse();
    return new_array;
}
const reversedValue = reverseValues([1, 2, 3, 4, 5]);
console.log(reversedValue);
// 3.
function removeFalsyValues(array) {
    const new_array = [];
    for (const element of array) {
        if (element) {
            new_array.push(element);
        }
    }
    return new_array;
}
const trueValueArray = removeFalsyValues(["", "Alana", 1, null, 0]);
console.log(trueValueArray);
