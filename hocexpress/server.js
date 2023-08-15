const express = require("express");
const app = express();
const fs = require("fs");
const port = 3002;

app.get("/san-pham", (req, res) => {
  res.send(
    "<form method='post'><input name='user'/><input type='submit' /></form>"
  );
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
