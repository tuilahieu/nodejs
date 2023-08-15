const http = require("http");
const fs = require("fs");
const { hostname, port } = require("./model/config");
const caller = require("./model/focus");
const render = require("./core/Base");

const server = http.createServer((req, res) => {
  caller.get();
  res.statusCode = 200;
  console.log("url", req.url);
  if (req.url === "/api") {
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    fs.readFile(`./model/api.json`, "utf8", (err, data) => {
      res.end(data);
    });
  } else {
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    if (req.url === "/") {
      render.render(req, res, "otpHome");
    } else if (req.url === "/account/123") {
      render.render(req, res, "otpCheck");
    }
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
