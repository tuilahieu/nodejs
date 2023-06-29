// function getMessage(msg, type) {
//   console.log("xin chào f8", msg);
//   console.log("Type = ", type);
// }

// getMessage("Hieu");

// function getTotal(a, b = 0) {
//   if (b !== 0) {
//     return a + b;
//   }
//   return;
// }

// var total = getTotal(3);
// console.log(total);

// function getTotal(a, b) {
//   var total = a + b; // total = biến cục bộ
//   return total;
// }

// function getMessage() {
//   var msg;
//   return msg;
// }

// console.log(getMessage());
// var msg = "f8";

// // callback

// var a = function () {
//   console.log(arguments);
// };

// console.log(a(1, 2, 3, 4, 5));

function sumPrime(number) {
  var isPrimeNumber = false;
  var total = 0;

  if (number <= 1) {
    total = 0;
    return false;
  } else {
    for (var i = number - 1; i >= 2; i--) {
      if (number % i === 0) {
        isPrimeNumber = false;
        break;
      } else {
        isPrimeNumber = true;
      }
    }
    if (isPrimeNumber) {
      total += i;
    }
  }
  return total;
}

console.log(sumPrime(5));
