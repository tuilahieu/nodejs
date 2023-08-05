const fs = require("fs");
class Base {
  render = (req, res, path, data = {}) => {
    fs.readFile(`./views/${path}.html`, "utf8", (err, viewContent) => {
      if (err) {
        res.end("ko tìm thấy trang");
      }
      viewContent = viewContent.replaceAll("{title}", data.title);
      viewContent = viewContent.replaceAll("{content}", data.content);
      res.end(viewContent);
    });
  };
}

module.exports = Base;
