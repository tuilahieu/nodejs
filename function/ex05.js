/**
 * gọi lại chính hàm đang định nghĩa
 * thay đổi tham số
 */

// var total = 0;

function showNumber(n) {
  if (n === 1) return n;
  n += showNumber(n - 1);
  return n;
}

var t = showNumber(2);
// console.log(t);

var fibonaci = function (n) {
  if ((n === 1) | (n === 2)) return 1;

  return fibonaci(n - 1) + fibonaci(n - 2);
};

console.log(fibonaci(7));
