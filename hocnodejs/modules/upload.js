const Base = require("../core/Base");
const formidable = require("formidable");
const fs = require("fs");

class Upload extends Base {
  showForm = (req, res) => {
    this.render(req, res, "upload");
  };

  handleUpload = async (req, res) => {
    const form = new formidable.IncomingForm(); //Tạo object form để đọc file

    //Chọn thư mục uploads
    form.uploadDir = "./public/uploads";

    //Cho phép phần mở rộng
    form.keepExtensions = true;

    const [fields, files] = await form.parse(req);
    const fileName = files.image[0].originalFilename;

    console.log("filepath: ", files.image[0].filepath);

    const status = fs.renameSync(
      files.image[0].filepath,
      "./public/uploads/" + fileName
    );

    console.log(status);

    await res.end("success");
  };
}

module.exports = new Upload();
