const datas = require("../data");
const fs = require("fs");

class Render {
  render = (request, response, data = datas) => {
    let keys = Object.keys(data);
    let values = Object.values(data);
    fs.readFile("./views/home.html", "utf8", (err, viewContent) => {
      // handle keys
      for (let i = 0; i < keys.length; i++) {
        viewContent = viewContent.replace("{key}", keys[i]);
      }
      // handle values
      for (let j = 0; j < values.length; j++) {
        if (typeof values[j] === "string") {
          viewContent = viewContent.replace("{attr}", values[j]);
        } else if (Array.isArray(values[j])) {
          // handle if inside is array
          let arrayContent = values[j].map(
            (v) => `<p class="array-attr">${v}</p>`
          );
          arrayContent = arrayContent.toString().replaceAll(",", " ");
          viewContent = viewContent.replace("{array}", arrayContent);
        } else if (
          typeof values === "object" &&
          !Array.isArray(values[j]) &&
          values !== null
        ) {
          // handle if inside is object
          let subKeys = Object.keys(values[j]);
          let subValues = Object.values(values[j]);
          let newDataView = [];
          let indexKey = 0;
          let indexValue = 0;
          if (subKeys.length === subValues.length) {
            for (let l = 0; l < subKeys.length + subKeys.length; l++) {
              if (l % 2 === 0) {
                newDataView.push(
                  `{startP}<span class="list-subkey">${subKeys[indexKey]}</span>`
                );
                indexKey++;
              } else {
                newDataView.push(
                  `<span class="list-attr">${subValues[indexValue]}</span>{endP}`
                );
                indexValue++;
              }
            }
            newDataView = newDataView
              .toString()
              .replaceAll(",", " ")
              .replaceAll("{startP}", "<p>")
              .replaceAll("{endP}", "</p>");
            viewContent = viewContent.replace("{list}", newDataView);
          } else {
            viewContent = viewContent.replace("{list}", "wrong data source !!");
          }
        }
      }
      response.end(viewContent);
    });
  };
}

module.exports = new Render();
