var express = require("express");
var router = express.Router();

const CartCtrl = require("../controllers/carts");

router.get("/", CartCtrl.index);

module.exports = router;
