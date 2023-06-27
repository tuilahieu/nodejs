// BÀI 1

var km = 3,
  fee;

if (km <= 1) {
  fee = 15000 * km;
} else if (km > 1 && km <= 5) {
  fee = 13500 * km;
} else if (km > 5 && km <= 120) {
  fee = 11000 * km;
} else if (km > 120) {
  fee = 11000 * km * 0.9;
}

console.log(
  `Phí phải trả cho quãng đường ${km}km là: `,
  fee.toLocaleString("vi", { style: "currency", currency: "vnd" })
);

// BÀI 2

var kwh = 734;
var cost;

var isLevel1 = kwh <= 50;
var isLevel2 = kwh > 51 && kwh <= 100;
var isLevel3 = kwh > 101 && kwh <= 200;
var isLevel4 = kwh > 201 && kwh <= 300;
var isLevel5 = kwh > 301 && kwh <= 400;

if (isLevel1) {
  cost = kwh * 1678;
} else if (isLevel2) {
  cost = kwh * 1734;
} else if (isLevel3) {
  cost = kwh * 2014;
} else if (isLevel4) {
  cost = kwh * 2536;
} else if (isLevel5) {
  cost = kwh * 2834;
} else {
  cost = kwh * 2927;
}

console.log(
  "Cái giá phải trả cho tiền điện tháng này là: ",
  cost.toLocaleString("vi", {
    style: "currency",
    currency: "vnd",
  })
);

// BÀI 3

var number = (cloneOfNumber = 6);
var giaithua = 1;

while (cloneOfNumber > 0) {
  giaithua = giaithua * cloneOfNumber;
  cloneOfNumber--;
}

console.log(`Giai thừa của ${number} là ${giaithua}`);

// BÀI 4

var number = 997;
var isPrimeNumber = false;

if (number <= 1) {
  console.log(`${number} không phải là số nguyên tố !`);
} else {
  for (var i = number - 1; i >= 2; i--) {
    if (number % i === 0) {
      isPrimeNumber = false;
      break;
    } else {
      isPrimeNumber = true;
    }
  }
}

if (isPrimeNumber) {
  console.log(`${number} là số nguyên tố!`);
} else {
  console.log(`${number} không phải là số nguyên tố!`);
}
