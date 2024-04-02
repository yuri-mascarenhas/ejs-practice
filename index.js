import express from "express";
import { fileURLToPath } from "url";
import * as path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/info", (req, res) => {
  res.render("info.ejs");
});

app.listen(3000, () => {
  console.log("-- Listening on port 3000 --");
});
