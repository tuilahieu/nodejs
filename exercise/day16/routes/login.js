var express = require("express");
var router = express.Router();

const logs = require("../database/logs.json");
const accounts = require("../database/accounts.json");

/* GET login page. */
router.get("/", function (req, res, next) {
  if (req.session.status) {
    res.redirect("/");
    return;
  }
  res.render("login", { msg: req.flash("msg"), type: req.flash("type") });
});
router.post("/", function (req, res, next) {
  req.session.loginCount = req.session.loginCount
    ? req.session.loginCount++
    : 0;
  console.log(req.session);
  const emailInput = req.body.email;
  const passwordInput = req.body.password;
  let indexAccount;
  const isCorrectAccount = accounts.some((account, index) => {
    indexAccount = index;
    return account.email === emailInput && account.password === passwordInput;
  });
  if (isCorrectAccount) {
    req.session.status = true;
    req.session.username = accounts[indexAccount]["username"];
    delete req.session.loginCount;
    res.redirect("/");
  } else {
    req.session.status = false;
    req.session.loginCount++;
    if (req.session.loginCount > 5) {
      req.flash("msg", logs["block_ip"]["msg"]);
      req.flash("type", logs["block_ip"]["type"]);
    } else if (req.body.email === "" || req.body.password === "") {
      req.flash("msg", logs["empty"]["msg"]);
      req.flash("type", logs["empty"]["type"]);
    } else {
      req.flash("msg", logs["incorrect"]["msg"]);
      req.flash("type", logs["incorrect"]["type"]);
    }
    res.render("login", {
      msg: req.flash("msg"),
      type: req.flash("type"),
    });
  }
});

module.exports = router;
