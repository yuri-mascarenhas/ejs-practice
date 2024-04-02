import express from "express";

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("Root path");
});

app.listen(3000, () => {
  console.log("-- Listening on port 3000 --");
});
