// for (var i = 0; i <= 5; i++) {
//   for (var j = 0; j <= 5; j++) {
//     for (var k = 0; k <= 5; k++) {
//       console.log(i, j, k);
//     }
//   }
// }

// var n = 10;
// var total = 0;

// for (var i = 1; i <= n; i++) {
//   total = total + i;
// }

// console.log(`Tổng là ${total}`);

// var total2 = 0;

// for (var i = 1; i <= n; i += 2) {
//   total2 = total2 + i;
// }

// console.log(total2);

// var factorial = 1;
// var total = 0;
// var n = 5;

//  1*1 + 1*2 + 1*2*3 + 1*2*3*4

// for (var i = 1; i <= n; i++) {
//   factorial = factorial * i;
//   total = total + factorial;
// }

// console.log(total);

// var number = 111;
// var isPrime = false;

// if (Number.isInteger(number)) {
//   if (number <= 1) {
//     isPrime = false;
//   } else {
//     for (var index = 2; index < number - 1; index++) {
//       if (number % index === 0) {
//         isPrime = false;
//         break;
//         // index = number; // thoát vòng lặp
//       } else {
//         isPrime = true;
//       }
//     }
//   }
// } else {
//   console.log(`${number} ko phải số nguyên.`);
// }

// console.log(isPrime);

var n = 10;
var i = 1;
var total = 0;

while (i <= n) {
  total += i;
  i++;
}

console.log("Total = ", total);

for (var i = 0; i <= 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log("object", i);
}
