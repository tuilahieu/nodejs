const servicesModel = require("../model/servicesModel");

module.exports = {
  index: (req, res) => {
    const listServices = servicesModel.getList();
    const servicesInfo = servicesModel.getInfo();
    res.render("view/services", { listServices, servicesInfo });
  },
};
