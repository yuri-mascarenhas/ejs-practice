import express from "express";

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/info", (req, res) => {
  res.render("info.ejs");
});

app.listen(3000, () => {
  console.log("-- Listening on port 3000 --");
});
