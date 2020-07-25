const express = require("express");

const ChampRouter = require("./requests/request.js");

const server = express();

server.use(express.json());
server.get("/", (req, res) => {
  res.json({ api: "up" });
});

server.use("/api/champs", ChampRouter);

module.exports = server;
