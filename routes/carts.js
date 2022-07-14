var express = require("express");
var router = express.Router();

const CartCtrl = require("../controllers/carts");

router.get("/cart", CartCtrl.index);
router.post("/product/:productId/cart", CartCtrl.update);

module.exports = router;
