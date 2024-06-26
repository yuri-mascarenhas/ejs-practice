import express from "express";
import { fileURLToPath } from "url";
import * as path from "path";
import capitalize from "./utils.js";
import galleryData from "./data.json" assert { type: "json" };

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.static(path.join(__dirname, "/public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

// Routes
app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/info", (req, res) => {
  const name = "Yuri Santos Mascarenhas";
  const cel = "+55 99 000-000-000";
  const persEmail = "yurism@id.uff.br";
  const workEmail = "yuri.mascarenhas@btgpactual.com";
  res.render("info.ejs", { name, cel, persEmail, workEmail });
});

app.get("/sub/:subpage", (req, res) => {
  const subName = req.params.subpage;
  const randNum = Math.floor(Math.random() * 10);
  res.render("subpage", { subName, randNum });
});

app.get("/gallery/:section", (req, res) => {
  const { section } = req.params;
  const exhibitData = Object.keys(galleryData)
    .filter((key) => key.includes(section))
    .map((key) => galleryData[key]);
  res.render("gallery.ejs", {
    gallery: exhibitData,
    section: capitalize(section),
  });
});

app.listen(3000, () => {
  console.log("-- Listening on port 3000 --");
});
