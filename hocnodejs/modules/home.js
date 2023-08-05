const Base = require("../core/Base");

class Home extends Base {
  index = (req, res) => {
    const title = "F8 - học lập trình.";
    const content = "học lập trình nodejs.";
    this.render(req, res, "home", { title, content });
  };
}

module.exports = new Home();
