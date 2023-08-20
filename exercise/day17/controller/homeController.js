const servicesModel = require("../model/servicesModel");
const aboutModel = require("../model/aboutModel");
const galleryModel = require("../model/galleryModel");
const testimonialModel = require("../model/testimonialModel");
const contactModel = require("../model/contactModel");

module.exports = {
  index: (req, res) => {
    const listServices = servicesModel.getList();
    const servicesInfo = servicesModel.getInfo();
    const aboutInfo = aboutModel.getInfo();
    const galleryInfo = galleryModel.getInfo();
    const testimonialInfo = testimonialModel.getInfo();
    const listTestimonials = testimonialModel.getList();
    const contactInfo = contactModel.getInfo();
    console.log(contactInfo);
    return res.render("index", {
      listServices,
      servicesInfo,
      aboutInfo,
      galleryInfo,
      testimonialInfo,
      listTestimonials,
      contactInfo,
    });
  },
};
