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

// 2.
function removeDuplicates(array: any[]) {
  let newArray: [string, any][] = [];
  newArray = array.filter((element, index) => array.indexOf(element) === index);
  return newArray;
}

{
  const result = removeDuplicates([
    1, 1, 1, 1, 1, 1, 2, 3, 4, 5, 5, 5, 5, 6, 7, 7, 7, 7, 7,
  ]);
  console.log(result);
}

// 3.
function identicalValues(array1: any[], array2: any[]) {

  if (array1.length === array2.length) {
    let isIdentical = true;
    array1.forEach((element, index) => {
      if (array1[index] !== array2[index]) {
        isIdentical = false;;
      }
    });
    return isIdentical;
  }

  return false;
}

{
  const result = identicalValues([1, 2, 3, 4], [1, 2, 3, 5]);
  console.log(result);
}