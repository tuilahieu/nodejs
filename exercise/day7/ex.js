// bài 1

var arrA = [1, 4, 3, 2];
var arrB = [5, 2, 6, 7, 1];

var result = arrA.filter((item) => arrB.includes(item));

console.log(result);

// bài 2

var arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];

// var result = arr.flat(Infinity);

var result = [];

function flatArray(arr) {
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      flatArray(item);
    } else {
      result.push(item);
    }
  });
  return result;
}
console.log("bài 2");
console.log(flatArray(arr));

// bài 3

var arr = [
  ["a", 1, true],
  ["b", 2, false],
];

function getArrayOfType(arr) {
  if (Array.isArray(arr)) return false;
  var arrayBool = [];
  var arrayNumber = [];
  var arrayString = [];
  arr.flat(Infinity).forEach((item) => {
    if (typeof item === "boolean") arrayBool.push(item);
    if (typeof item === "number") arrayNumber.push(item);
    if (typeof item === "string") arrayString.push(item);
  });

  return [arrayString, arrayNumber, arrayBool];
}

console.log(getArrayOfType(arr));
