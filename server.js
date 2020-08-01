const express = require("express");

const ChampRouter = require("./requests/request.js");

const server = express();

server.use(express.json());
server.get("/", (req, res) => {
  res.json({ api: "up" });
});

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
});

server.use("/api/champs", ChampRouter);

module.exports = server;
