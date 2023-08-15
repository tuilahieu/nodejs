module.exports = {
  index: (req, res) => {
    const title = "trang chủ f8";
    const products = ["sp1", "sp2", "sp3"];
    return res.render("home/index", { title, products });
  },
};
