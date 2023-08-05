const http = require("http");
const home = require("./modules/home");

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
  const path = req.url;
  pathView = router[path] ? router[path] : "404";
  if (path === "/") {
    home.index(req, res);
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
