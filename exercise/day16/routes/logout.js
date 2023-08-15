var express = require("express");
var router = express.Router();

const logs = require("../database/logs.json");

/* GET logout page. */
router.get("/", function (req, res, next) {
  if (req.session.status) {
    req.flash("msg", logs["logout"]["msg"]);
    req.flash("type", logs["logout"]["type"]);
    delete req.session.status;
    delete req.session.username;
    delete req.session.loginCount;
    return res.redirect("dang-nhap");
  } else {
    req.flash("msg", logs["no_permission"]["msg"]);
    req.flash("type", logs["no_permission"]["type"]);
    return res.redirect("dang-nhap");
  }
});

module.exports = router;
