// var getTotal = function (msg, ...args) {
//   console.log(msg);
//   console.log(args);
// };

// getTotal("kết quả là: ", 1, 3, 4, 5, 6, 7);

var getMax = function (...args) {
  // đặt lính canh
  var max = args[0];
  for (var i = 1; i < args.length; i++) {
    if (max < args[i]) {
      max = args[i];
    }
  }
  return max;
};

var x = getMax(1, 2, 3, 4, 100, 5, 6);
console.log(x);
