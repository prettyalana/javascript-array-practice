// 1.
function createANewArray(string, count) {
    var array = [];
    for (var i = 0; i < count; i++) {
        array.push(string);
    }
    return array;
}
var new_array = createANewArray("sunshine", 3);
console.log(new_array);
// 2.
function reverseValues(array) {
    var new_array = array.reverse();
    return new_array;
}
var reversedValue = reverseValues([1, 2, 3, 4, 5]);
console.log(reversedValue);
// 3.
function removeFalsyValues(array) {
    var new_array = [];
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var element = array_1[_i];
        if (element) {
            new_array.push(element);
        }
    }
    return new_array;
}
var trueValueArray = removeFalsyValues(['', "Alana", 1, null, 0]);
console.log(trueValueArray);
// function isPositive(val) {
//     return val > 0;
// }
// let a = [10, 25, 30, -10, 32, -35];
// let filtered = a.filter(isPositive);
// console.log("Positive Array Elements: ", filtered);
