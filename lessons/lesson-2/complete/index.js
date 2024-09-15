const express = require("express");
const path = require("path");

const publicDirectoryPath = path.join("public");

const app = express();
const PORT = 8888;

app.use(express.static(publicDirectoryPath));

// here
// app.get("/", function (req, res) {
//   res.send("Hello world");
// });

app.get("/ping", function (req, res) {
  res.send("pong");
});

app.get("/greeting", function (req, res) {
  console.log("req =", req.query);
  const name = req.query.name;
  res.send("greeting " + name);
});

app.listen(PORT, function () {
  console.log("server is running on port: " + PORT);
});
