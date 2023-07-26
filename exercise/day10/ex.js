// bài 1

function getSum(...arg) {
  return arg.reduce((acc, cur) => {
    if (isNaN(+acc) || isNaN(+cur)) return "vui lòng truyền số !";
    return +acc + +cur;
  }, 0);
}

// console.log(getSum(1, 2, 3, "hi", "5"));

// bài 2

function openFile() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("File đã được mở.");
    }, 2000);
  });
}

function readFile() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("F8 - Học lập trình để đi làm");
    }, 1000);
  });
}

function closeFile() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("File đã đóng.");
    }, 1000);
  });
}

openFile()
  .then((res) => {
    console.log(res);
    return readFile();
  })
  .then((res) => {
    console.log(res);
    return closeFile();
  })
  .then((res) => {
    console.log(res);
  });
