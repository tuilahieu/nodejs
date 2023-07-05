var getA = function (cb, ...args) {
  setTimeout(function () {
    console.log("fnc 1");
    cb(...args);
  }, 1000);
};

var getB = function (msg, type) {
  console.log(msg, type);
};

getA(getB, "hello", "success");

var count = 0;
var myInterval = setInterval(function () {
  count++;
  console.log("Xin chào F8", count);
  if (count === 5) {
    console.log("end");
    clearInterval(myInterval);
  }
}, 1000);
