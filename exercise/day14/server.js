const http = require("http");
const fs = require("fs");
var bodyParser = require("body-parser");

const port = 3000;
const hostname = "localhost";
const render = require("./core/Base");

const server = http.createServer((req, res) => {
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
      if (req.method === "POST") {
        bodyParser.urlencoded({ extended: false })(req, res, () => {
          const formData = req.body;
          if (formData.phone.length === 10) {
            render.render(req, res, "otpCheck", {
              phoneFocusing: formData.phone,
            });
          } else {
            render.render(req, res, "otpHome", {
              error: "số điện thoại không đúng !",
            });
          }
        });
      } else {
        render.render(req, res, "otpHome");
      }
    }
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
