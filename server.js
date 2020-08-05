const express = require("express");
const cors = require("cors");
const ChampRouter = require("./requests/request.js");

const server = express();

// const corsOptions = {
//   origin: "https://lol-random-champ.vercel.app/",
// };

server.options("*", cors());

server.use(express.json());
server.get("/", (req, res) => {
  res.json({ api: "up" });
});

// server.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "*");
// });

server.use("/api/champs", ChampRouter);

module.exports = server;
