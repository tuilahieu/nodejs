const galleryModel = require("../model/galleryModel");

module.exports = {
  index: (req, res) => {
    const galleryInfo = galleryModel.getInfo();
    return res.render("view/gallery", { galleryInfo });
  },
};
