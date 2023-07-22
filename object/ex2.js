const product1 = {
  name: "Nồi cơm điện",
  price: 1299000,
  priceUnit: "đ",
  discount: 30,
  discountUnit: "đ",
  getPrice: function () {
    if (this.discountUnit === "%") {
      return this.price - (this.price * this.discount) / 100;
    } else if (this.discountUnit === "đ") {
      return (this.price = -this.discount);
    }
    return this.price;
  },
  getTextPrice: function () {
    return `${this.getPrice()}${this.priceUnit}`;
  },
  change: function () {
    this.price - 100;
    console.log(this);
  },
};

console.log(product1.change());
// console.log(product1);
