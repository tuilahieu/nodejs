var hddUsaged = "hddUsaged";

var laptop = {
  name: "Mac",
  price: 20,
  cpu: "apple",
  [hddUsaged]: 100,
  restart: function () {
    console.log("restarting...");
  },
};

var myFriend = {
  name: "Hung",
  age: 20,
  isBff: true,
  speak: function () {
    console.log(`hello ${this.name}`);
  },
};

var product = {
  brandName: "Samsung",
  name: "ssg",
  description: "",
  imgUrl: "",
  setNewName: function (newName) {
    this.name = newName;
  },
};

// các cách truy cập vào giá trị của 1 object
// 1. object.key
// 2. object['key']
// 3. object[variable] // variable
var keyName = "name",
  keyPrice = "price",
  keyCpu = "cpu";

console.log(laptop);

console.log(laptop.name, laptop.price, laptop.cpu);
console.log(laptop["name"], laptop["price"], laptop["cpu"]);
console.log(laptop[keyName], laptop[keyPrice], laptop[keyCpu]);

laptop.display = "retina";
laptop["ram"] = 8;
var hdd = "hdd";
laptop[hdd] = 256;
laptop.unit = "GB";

laptop["run"]();
