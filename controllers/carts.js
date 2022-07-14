const Cart = require("../models/cart");
const Product = require("../models/product").model;

function index(req, res) {
  Cart.find({}, function (err, cart) {
    console.log(...cart, "this is all cart data");
    res.render("cart/bag", { title: "Cart", cart });
  });
}

function update(req, res) {
  //if there is no cart then make one, otherwise it will update it
  const cart = new Cart();
  Product.findById(req.params.productId, function (err, product) {
    cart.products.push(product);
    cart.save(function (err, product) {
      // one way to handle errors
      if (err) return res.redirect("/product/add");
      console.log(product);
      // for now, redirect right back to new.ejs
      res.redirect("/cart");
    });
  });
}

module.exports = { index, update };
