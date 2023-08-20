var express = require("express");
var router = express.Router();

const HomeController = require("../controller/homeController");
const AboutController = require("../controller/aboutController");
const GalleryController = require("../controller/galleryController");
const ServicesController = require("../controller/servicesController");
const ContactController = require("../controller/contactController");

/* GET home page. */
router.get("/", HomeController.index);
router.get("/index.html", HomeController.index);
router.get("/about.html", AboutController.index);
router.get("/gallery.html", GalleryController.index);
router.get("/services.html", ServicesController.index);
router.get("/contact.html", ContactController.index);

module.exports = router;
