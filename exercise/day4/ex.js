// # Bài 1: Hiển thị N số Fibonaci đầu tiên

function fibonaci(n) {
  if (n === 1 || n === 2) return 1;
  return fibonaci(n - 1) + fibonaci(n - 2);
}

function getFibonaciList(n) {
  if (n < 0 || !Number.isInteger(n)) return "Unvalid number";
  var listNumber = "";
  for (var i = 1; i <= n; i++) {
    listNumber += fibonaci(i) + " ";
  }
  return listNumber;
}

var x = getFibonaciList(10);
// console.log(x);

// # Bài 2: Viết hàm đảo ngược số nguyên với tham số là số cần đảo ngược

var reverse = "";

function reverseNumber(n) {
  if (n < 0) return false;
  //   return Number(n.toString().split("").reverse().join(""));
  if (n / 10 >= 0.1) {
    var lastDigit = (n / 10).toString().split(".")[1] ?? 0;
    reverse += lastDigit;
    reverseNumber(Number.parseInt(n / 10));
  }
  return Number(reverse);
}

var a = reverseNumber(10230002345);
// console.log(a);

// # Bài 3: Viết hàm chuyển số thành chữ

function convertUnitNumberToWord(number) {
  switch (number) {
    case 0:
      number = "không";
      break;
    case 1:
      number = "một";
      break;
    case 2:
      number = "hai";
      break;
    case 3:
      number = "ba";
      break;
    case 4:
      number = "bốn";
      break;
    case 5:
      number = "năm";
      break;
    case 6:
      number = "sáu";
      break;
    case 7:
      number = "bảy";
      break;
    case 8:
      number = "tám";
      break;
    case 9:
      number = "chín";
      break;
    default:
      break;
  }
  return number;
}

function removeFirstDigit(number) {
  const numberString = number.toString();
  const newNumberString = numberString.slice(1);
  const newNumber = parseInt(newNumberString);
  return newNumber;
}

function switchNumberToWords(number) {
  if (number < 0 || number > 9999) return "unvalid number";
  var unit, tens, hundreds, thounsands, result;
  if (number / 1000 >= 1) {
    thounsands = convertUnitNumberToWord(Math.floor(number / 1000));
    number = removeFirstDigit(number);
    hundreds = convertUnitNumberToWord(Math.floor(number / 100));
    number = removeFirstDigit(number);
    tens = convertUnitNumberToWord(Math.floor(number / 10));
    number = removeFirstDigit(number);
    unit = convertUnitNumberToWord(Math.floor(number));
    result =
      thounsands + " ngàn " + hundreds + " trăm " + tens + " mươi " + unit;
  } else if (number / 100 >= 1) {
    hundreds = convertUnitNumberToWord(Math.floor(number / 100));
    number = removeFirstDigit(number);
    tens = convertUnitNumberToWord(Math.floor(number / 10));
    number = removeFirstDigit(number);
    unit = convertUnitNumberToWord(Math.floor(number));
    result = hundreds + " trăm " + tens + " mươi " + unit;
  } else if (number / 10 >= 1) {
    tens = convertUnitNumberToWord(Math.floor(number / 10));
    number = removeFirstDigit(number);
    unit = convertUnitNumberToWord(Math.floor(number));
    result = tens + " mươi " + unit;
  } else {
    unit = convertUnitNumberToWord(Math.floor(number));
    result = unit;
  }
  return result;
}

console.log(switchNumberToWords(3499));
