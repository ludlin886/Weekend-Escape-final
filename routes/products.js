var express = require("express");
var router = express.Router();
const ProductCtrl = require("../controllers/products");

router.get("/products", ProductCtrl.index);

module.exports = router;
