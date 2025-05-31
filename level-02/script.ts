// 1.
"use strict";

function matchArrays(array: [string, any][]) {
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

