var getTotal = function (a) {
  return function (b) {
    return a + b;
  };
};

var add = getTotal(5);
console.log(add(10));
console.log(add(30));
