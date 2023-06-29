// # Bài 1: Tìm số chẵn lẻ

function getListOfNumber(number) {
  var isOdd = true;
  var isEven = false;
  var listOddNumber = "";
  var listEvenNumber = "";
  for (var index = 1; index <= number; index++) {
    if (index % 2 === 0) {
      isEven = true;
      isOdd = false;
      listEvenNumber += index + ", ";
    } else {
      isEven = false;
      isOdd = true;
      listOddNumber += index + ", ";
    }
  }
  return `Số lẻ: ${listOddNumber}
Số chẵn: ${listEvenNumber}`;
}

var x = getListOfNumber(10);
console.log(x);

// # Bài 2: Tính giá trị biểu thức
// S= 1*2 + 2*3 + 3*4 + ... + n*(n+1)

var s = 0;
var num = 3;

for (var j = 0; j <= num; j++) {
  s += j * (j + 1);
}

console.log(s);

// # Bài 3: Tính tổng chẵn lẻ

var a = 5,
  b = 9;
var sumOfOdd = 0;
var sumOfEven = 0;

for (var i = a; i <= b; i++) {
  if (i % 2 === 0) {
    sumOfEven += i;
  } else {
    sumOfOdd += i;
  }
}

console.log(
  `Tổng số lẻ: ${sumOfOdd}
Tổng số chẵn: ${sumOfEven}`
);

// # Bài 4: Viết hàm kiểm tra số nguyên tố

function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

if (isPrime(10)) {
  console.log("Đây là 1 số nguyên tố");
} else {
  console.log("Đây không phải là 1 số nguyên tố");
}

// # Bài 5: Tính giá trị biểu thức không dùng vòng lặp

//Tính giá trị biểu thức: S = 1 + 1/2 + 1/3 + 1/4 + 1/5 +…+1/N

function getValue(n) {
  var s = 0;
  if (n >= 1) {
    s = 1 / n;
    s = s + getValue(n - 1);
  }
  return s;
}

console.log("s là", getValue(3));
