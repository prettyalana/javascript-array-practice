// 1.
"use strict";
function matchArrays(array) {
    return Object.fromEntries(array);
}
{
    const result = matchArrays([
        ["name", "Charlie"],
        ["color", "brown"],
        ["age", 10],
    ]);
    console.log(result);
}
// 2.
function removeDuplicates(array) {
    let newArray = [];
    newArray = array.filter((element, index) => array.indexOf(element) === index);
    return newArray;
}
{
    const result = removeDuplicates([
        1, 1, 1, 1, 1, 1, 2, 3, 4, 5, 5, 5, 5, 6, 7, 7, 7, 7, 7,
    ]);
    console.log(result);
}
