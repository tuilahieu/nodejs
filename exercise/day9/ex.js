var categories = [
  {
    id: 1,
    name: "Chuyên mục 1",
    parent: 0,
  },
  {
    id: 2,
    name: "Chuyên mục 2",
    parent: 0,
  },
  {
    id: 3,
    name: "Chuyên mục 3",
    parent: 0,
  },
  {
    id: 4,
    name: "Chuyên mục 2.1",
    parent: 2,
  },
  {
    id: 5,
    name: "Chuyên mục 2.2",
    parent: 2,
  },
  {
    id: 6,
    name: "Chuyên mục 2.3",
    parent: 2,
  },
  {
    id: 7,
    name: "Chuyên mục 3.1",
    parent: 3,
  },
  {
    id: 8,
    name: "Chuyên mục 3.2",
    parent: 3,
  },
  {
    id: 9,
    name: "Chuyên mục 3.3",
    parent: 3,
  },
  {
    id: 10,
    name: "Chuyên mục 2.2.1",
    parent: 5,
  },
  {
    id: 11,
    name: "Chuyên mục 2.2.2",
    parent: 5,
  },
];

function getNestedArray(categories, parentId = 0) {
  var parentElements = categories.filter(
    (category) => category.parent === parentId
  );

  var result = parentElements.map((item) => {
    return {
      ...item,
      children: getNestedArray(categories, item.id),
    };
  });
  return result;
}

// console.log(getNestedArray(categories));

// bài 2

Array.prototype.reduce2 = function (callback, initialValue) {
  if (initialValue === undefined) {
    initialValue = this[0];
    this.splice(0, 1);
  }

  for (let i = 0; i < this.length; i++) {
    initialValue = callback(initialValue, this[i]);
  }

  return initialValue;
};

var test = [1, 2, 3];

var result = test.reduce2((a, b) => Math.max(a, b));

// console.log(result);

// bài 3

Array.prototype.filter2 = function (callback) {
  var result = [];
  for (var i = 0; i < this.length; i++) {
    if (callback(this[i], i)) {
      result.push(this[i]);
    }
  }
  return result;
};

var words = ["hieu", "f8", "backend", "nodejs"];

var test2 = words.filter2((item) => item.length > 3);
// console.log(test2);

// bài 4
Object.prototype.getCurrency = function (currencyUnit) {
  if (Number.isNaN(Number(this))) return "unvalid";
  return Number(this).toLocaleString() + currencyUnit;
};

var price = 12000;
console.log(price.getCurrency("đ")); //Hiển thị: 12,000 đ

var price = "12000000";
console.log(price.getCurrency("đ")); //Hiển thị: 12,000,000 đ

var price = { 123: "123" };
console.log(price.getCurrency("đ")); //
