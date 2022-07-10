var express = require("express");
var router = express.Router();

const CartCtrl = require("../controllers/carts");

router.get("/cart", CartCtrl.index);

module.exports = router;
