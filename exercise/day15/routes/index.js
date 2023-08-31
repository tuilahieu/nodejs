var express = require("express");
var router = express.Router();
const { v4: uuidv4 } = require("uuid");

let todoList = [];

/* GET home page. */
router.get("/", function (req, res, next) {
  console.log("cookie =>", req.cookies);
  if (!req.cookies?.isFirstTime) {
    res.render("welcome");
  } else {
    res.redirect("use");
  }
});
router.get("/tutorial", function (req, res, next) {
  res.render("tutorial");
});
router.get("/use", function (req, res, next) {
  res.render("use", { todoList });
});
router.post("/use", function (req, res, next) {
  todoList.push({
    id: uuidv4(),
    content: req.body.todo,
  });
  res.render("use", { todoList });
});

router.post("/delete", function (req, res, next) {
  const todoNeedDelete = req.body;
  todoList = todoList.filter((todo) => todo.id !== todoNeedDelete.id);
  res.render("use", { todoList });
});
module.exports = router;
