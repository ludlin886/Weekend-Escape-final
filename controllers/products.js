const Product = require("../models/product");

function index(req, res) {
  res.render("product/index", { title: "Products" });
}

module.exports = { index };
