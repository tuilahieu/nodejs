const Base = require("../core/Base");

class Products extends Base {
  index = (req, res) => {
    res.end(`<h1>sản phẩm</h1>`);
  };

  add = (req, res) => {
    const method = req.method;

    if (method === "GET") {
      this.render(req, res, "product_add");
    } else if (method === "POST") {
      const errors = {};
      //   const queryString = req.url.split("?").slice("-1").join();
      //   const search = new URLSearchParams(queryString);
      //   if (queryString) {
      //     const key = search.get("key");
      //     console.log("key =>", key);
      //   }
      //   console.log(req.headers["user-agent"]);
      req.on("data", (buffer) => {
        const body = buffer.toString();
        if (body) {
          const bodyObject = new URLSearchParams(body);
          const name = bodyObject.get("name");
          const email = bodyObject.get("email");
          if (!name) {
            errors.name = "vui lòng nhập tên";
          }
          if (!email) {
            errors.email = "vui lòng nhập email";
          }
          console.log(errors);
        }
        this.render(req, res, "product_add", {
          "error.name": errors.name ?? "",
          "error.email": errors.email ?? "",
        });
      });
    }
  };

  find = (req, res) => {
    res.end("sản phẩm");
  };
}

module.exports = new Products();
