var express = require("express");
var router = express.Router();
const ProductCtrl = require("../controllers/products");

router.get("/add", ProductCtrl.newProduct);
router.get("/", ProductCtrl.index);
router.post("/", ProductCtrl.create);

module.exports = router;
