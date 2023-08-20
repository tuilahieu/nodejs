const aboutModel = require("../model/aboutModel");

module.exports = {
  index: (req, res) => {
    const aboutInfo = aboutModel.getInfo();
    return res.render("view/about", { aboutInfo });
  },
};
