// bài 11
const customers = [];

function Customer(name, age, address) {
  this.name = name;
  this.age = age;
  this.address = address;
}

const a = new Customer("Nguyễn Văn A", 11, "Ha Noi");
const b = new Customer("Nguyễn Văn B", 2, "Hai Phong");
const c = new Customer("Nguyễn Văn C", 12, "TP.HCM");
customers.push(a, b, c);

function createCustomers(customers) {
  if (!Array.isArray(customers)) return null;
  if (!customers?.length) return null;
  customers.sort((a, b) => a?.age - b?.age);
  const result = customers.map((customer) => {
    const customerNameSplitted = customer.name.split(" ");
    return {
      ...customer,
      shortName:
        customerNameSplitted[0] +
        " " +
        customerNameSplitted[customerNameSplitted.length - 1],
    };
  });
  return result;
}

// console.log(createCustomers(customers));

// bài 2

function User(name, password, email) {
  this.name = name;
  this.password = password;
  this.email = email;
}

const userDatas = [];

function handleRegister(name, password, email, role = "user") {
  if (!name || !password || !email) return "Please fill all fields!";
  const userData = { ...new User(name, password, email), role };
  userDatas.push(userData);
  return userDatas;
}

handleRegister("hieu", "123456", "hieu@gmail.com");
handleRegister("hieu", "123456", "hieu@gmail.com");

function handleLogin(email, password) {
  if (!password || !email) return "Please fill all fields!";
  const result = userDatas.find(
    (user) => user.email === email && user.password === password
  );
  return result ?? "Thông tin đăng nhập không hợp lệ!";
}

const r = handleLogin("hieu@gmail.com", "123456");
console.log(r);
