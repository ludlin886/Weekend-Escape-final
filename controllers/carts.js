const Cart = require("../models/cart");

function index(req, res) {
  res.render("cart/index", { title: "Cart" });
}

module.exports = { index };
