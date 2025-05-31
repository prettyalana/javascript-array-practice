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
