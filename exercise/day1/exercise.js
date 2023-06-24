var a, b, c;

// # bài 1

console.log("Bài 1: -------------------------------");

a = -5;
b = 10;

a = a * b;
b = a / b;
a = a / b;

console.log("a: ", a);
console.log("b: ", b);

// # bài 2
console.log("Bài 2: -------------------------------");

var sum = 10 + 20 + 5 ** 10 / 2;
console.log("Sum: ", sum);

// # bài 3
console.log("Bài 3: -------------------------------");

a = 10;
b = 30;
c = 20;

if (a > b && a > c) {
  console.log(`a có giá trị ${a} là số lớn nhất`);
} else if (b > a && b > c) {
  console.log(`b có giá trị ${b} là số lớn nhất`);
} else {
  console.log(`c có giá trị ${c} là số lớn nhất`);
}

// # bài 4
console.log("Bài 4: -------------------------------");

a = 5;
b = -5;

if (a * b > 0) {
  console.log("2 số cùng dấu");
} else {
  console.log("2 số trái dấu");
}

// # bài 5
console.log("Bài 5: -------------------------------");

a = 100;
b = 10;
c = -20;

if (a > b) {
  // nếu a > b thì hoán vị a thành b
  a = a * b;
  b = a / b;
  a = a / b;
}
if (a > c) {
  // nếu a > c thì hoán vị a thành c
  a = a * c;
  c = a / c;
  a = a / c;
}
if (b > c) {
  // nếu b > c thì hoán vị b thành c
  b = b * c;
  c = b / c;
  b = b / c;
}

// => biến đổi thành: a < b < c

console.log(a, b, c);
