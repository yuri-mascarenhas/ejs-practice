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
  const name = "Yuri Santos Mascarenhas";
  const cel = "+55 99 000-000-000";
  const persEmail = "yurism@id.uff.br";
  const workEmail = "yuri.mascarenhas@btgpactual.com";
  res.render("info.ejs", { name, cel, persEmail, workEmail });
});

app.get("/sub/:subpage", (req, res) => {
  const subName = req.params.subpage;
  const randNum = Math.floor(Math.random(10));
  res.render("subpage", { subName, randNum });
});

app.listen(3000, () => {
  console.log("-- Listening on port 3000 --");
});
