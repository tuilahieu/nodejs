var a = {
  name: "hoàng an",
  age: 31,
};

var b = JSON.parse(JSON.stringify(a));

Array.prototype.map2 = function (callback) {
  var result = [];
  for (var i = 0; i < this.length; i++) {
    if (callback(this[i], i)) {
      result.push(this[i]);
    }
  }
  return result;
};

var arr = [1, 2, 3, 4];

var res = arr.map2(function (item, index) {
  return item;
});

console.log(res);
