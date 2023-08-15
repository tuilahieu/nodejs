var express = require("express");
var router = express.Router();

// import controller

const HomeController = require("../controllers/HomeController");
const ProductController = require("../controllers/ProductController");

// khai báo route

router.get("/", HomeController.index);
router.get("/san-pham", ProductController.index);
router.get("/san-pham/:slug.html", ProductController.get);
router.get("/san-pham/them", ProductController.add);
router.post("/san-pham/them", ProductController.handleAdd);

module.exports = router;
