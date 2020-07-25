const express = require("express");

const Champs = require("./request-model.js");

const router = express.Router();

router.get("/", (req, res) => {
  Champs.find()
    .then((champions) => {
      res.json(champions);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get champions" });
    });
});

router.get("/top", (req, res) => {
  Champs.findTop()
    .then((champions) => {
      var randChamp = Math.floor(Math.random() * champions.length);
      res.json(champions[randChamp]);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get champions" });
    });
});

router.get("/jungle", (req, res) => {
  Champs.findJng()
    .then((champions) => {
      var randChamp = Math.floor(Math.random() * champions.length);
      res.json(champions[randChamp]);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get champions" });
    });
});

router.get("/mid", (req, res) => {
  Champs.findMid()
    .then((champions) => {
      var randChamp = Math.floor(Math.random() * champions.length);
      res.json(champions[randChamp]);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get champions" });
    });
});

router.get("/adc", (req, res) => {
  Champs.findAdc()
    .then((champions) => {
      var randChamp = Math.floor(Math.random() * champions.length);
      res.json(champions[randChamp]);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get champions" });
    });
});

router.get("/sup", (req, res) => {
  Champs.findSup()
    .then((champions) => {
      var randChamp = Math.floor(Math.random() * champions.length);
      res.json(champions[randChamp]);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get champions" });
    });
});

module.exports = router;
