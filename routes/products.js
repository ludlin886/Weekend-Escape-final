var express = require("express");
var router = express.Router();
const ProductCtrl = require("../controllers/products");

router.get("/add", ProductCtrl.newProduct);
router.get("/product", ProductCtrl.index);
router.post("/product", ProductCtrl.create);
router.get("/:id", ProductCtrl.show);

module.exports = router;
