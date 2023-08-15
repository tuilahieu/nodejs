const { json } = require("express");

module.exports = {
  index: (req, res) => {
    const { keyword } = req.query;
    return res.send("<h1>sản phẩm</h1>");
  },
  get: (req, res) => {
    const { slug } = req.params;
    return res.send(`sản phẩm ${slug}`);
  },
  add: (req, res) => {
    const { msg } = req.session;

    return res.render("products/add", { msg });
  },
  handleAdd: (req, res) => {
    // req.headers["user-agent"] = "custom user agent";
    const { name, price } = req.body;
    req.session.msg = "vui lòng nhập đầy đủ thông tin";
    return res.redirect("/san-pham/them");
  },
};
