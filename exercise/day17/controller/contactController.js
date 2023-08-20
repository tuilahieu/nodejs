const contactModel = require("../model/contactModel");

module.exports = {
  index: (req, res) => {
    const contactInfo = contactModel.getInfo();
    return res.render("view/contact", { contactInfo });
  },
};
