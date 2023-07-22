var products = [
  false,
  { name: "nồi cơm 2", price: 1000 },
  null,
  ["sản phẩm 1"],
  { name: "nồi cơm", price: 10000 },
  { name: "tủ lạnh", price: 500 },
  { name: "bếp ga", price: 200 },
];

var res = {};
products.forEach((pr) => {
  if (pr?.name && pr?.price && !Object.keys(res).length) {
    res = pr;
  }
  if (res?.price < pr?.price) {
    res = pr;
  }
});

console.log(res);
