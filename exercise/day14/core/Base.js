const fs = require("fs");
class Base {
  render = (req, res, path, data = {}) => {
    fs.readFile(`./views/${path}.html`, "utf8", (err, viewContent) => {
      if (err) {
        res.end("ko tìm thấy trang");
      }
      const result = viewContent?.match(/{.+?}/g);
      if (result?.length) {
        for (let i = 0; i < result.length; i++) {
          const item = result[i];
          //   console.log(data["errors.name"]);
          const itemKey = item.replaceAll("{", "").replaceAll("}", "");
          // console.log("itemKey =>", data[itemKey]);
          viewContent = viewContent.replaceAll(item, data[itemKey] ?? "");
        }
      }
      res.end(viewContent);
    });
  };
}

module.exports = new Base();
