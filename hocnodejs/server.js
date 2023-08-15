const http = require("http");
const url = require("url");
const home = require("./modules/home");
const products = require("./modules/products");
const upload = require("./modules/upload");

const hostname = "localhost";
const port = 3000;
const router = {
  "/": "home",
  "/gioi-thieu": "about",
  "/san-pham": "products",
};

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  let pathView = "home";
  const pattern = /\/*$/;
  const pathname = url.parse(req.url).pathname.replace(pattern, "");
  if (pathname === "") {
    home.index(req, res);
  } else if (pathname === "/san-pham") {
    products.index(req, res);
  } else if (pathname === "/san-pham/them") {
    products.add(req, res);
  } else if (pathname === "/upload") {
    if (req.method === "POST") {
      upload.handleUpload(req, res);
    } else {
      upload.showForm(req, res);
    }
  } else if (pathname === "/xem-san-pham") {
    products.find(req, res);
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
