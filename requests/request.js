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

router.get("/team", (req, res) => {
  findTeam();
  function findTeam() {
    var newTeam = [];
    Champs.findTop().then((champions) => {
      var randChamp = Math.floor(Math.random() * champions.length);
      var chosenChamp = champions[randChamp];
      newTeam.push(chosenChamp);

      Champs.findJng().then((champions) => {
        var randChamp = Math.floor(Math.random() * champions.length);
        var chosenChamp = champions[randChamp];
        newTeam.push(chosenChamp);

        Champs.findMid().then((champions) => {
          var randChamp = Math.floor(Math.random() * champions.length);
          var chosenChamp = champions[randChamp];
          newTeam.push(chosenChamp);

          Champs.findAdc().then((champions) => {
            var randChamp = Math.floor(Math.random() * champions.length);
            var chosenChamp = champions[randChamp];
            newTeam.push(chosenChamp);

            Champs.findSup().then((champions) => {
              var randChamp = Math.floor(Math.random() * champions.length);
              var chosenChamp = champions[randChamp];
              newTeam.push(chosenChamp);

              const idArray = [];

              newTeam.map((obj) => {
                idArray.push(obj.id);
              });

              var sorted_arr = idArray.slice().sort();

              for (var i = 0; i < sorted_arr.length - 1; i++) {
                if (sorted_arr[i + 1] === sorted_arr[i]) {
                  return findTeam();
                } else {
                  return res.json(newTeam);
                }
              }
            });
          });
        });
      });
    });
  }
});

module.exports = router;
