const Cart = require("../models/cart");

function index(req, res) {
  Cart.find({}, function (err, cart) {
    res.render("cart/bag", { title: "Cart", cart });
  });
}

module.exports = { index };
