var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  if (!req.session.status) {
    res.redirect("/dang-nhap");
    return;
  }
  res.render("index", {
    username: req.session.username,
  });
});

module.exports = router;
