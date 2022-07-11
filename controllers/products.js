const Product = require("../models/product");

function newProduct(req, res) {
  res.render("product/add");
}

function index(req, res) {
  res.render("product/index", { title: "Products" });
}

function create(req, res) {
  //product model
  const product = new Product(req.body);

  product.save(function (err) {
    // one way to handle errors
    if (err) return res.redirect("/product/add");
    console.log(flight);
    // for now, redirect right back to new.ejs
    res.redirect("/product");
  });
}

// const product = new Product(req.body);
// product.save((error, product) => {
//   if (error) throw error;
//   res.json(product);
// });

module.exports = { index, create, newProduct };
