const express = require("express");
const ChampRouter = require("./requests/request.js");

const server = express();

server.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

server.use(express.json());
server.get("/", (req, res) => {
  res.json({ api: "up" });
});

server.use("/api/champs", ChampRouter);

module.exports = server;
