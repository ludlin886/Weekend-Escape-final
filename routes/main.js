var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("home/main", { title: "Weekend Escape" });
});
router.get("/game", function (req, res, next) {
  res.render("game/index", { title: "Game" });
});

module.exports = router;
