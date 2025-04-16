const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to v1 app!!!!!!");
});

app.get("/info", (req, res) => {
  res.send("hey this is /info api");
});

app.listen(3000, '0.0.0.0', () => {
  console.log("App running on 0000/3000");
});
