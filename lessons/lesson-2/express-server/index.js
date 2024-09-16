import express from "express";
import path from "path";

const PORT = 8888; // app is goign to run on this port

const app = express(); // instantiating express app here

const publicDirectoryPath = path.join("public");

app.use(express.static(publicDirectoryPath));

/**
 * @description simple endpoint /ping for health check
 */
app.get("/ping", function (req, res) {
  res.send("pong");
});

app.get("/greetings", function (req, res) {
  const { name, location, occupation } = req.query;

  res.send(
    JSON.stringify({
      _id: "1",
      name,
      location,
      occupation,
      age: 35,
      favoriteFood: "chocolate ice cream",
      hobbies: ["hockey", "jogging"],
    })
  );
});

app.listen(PORT, function () {
  console.log("app is running on port: " + PORT);
});
