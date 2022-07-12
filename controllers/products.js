const Product = require("../models/product").model;

function newProduct(req, res) {
  res.render("product/add");
}

function index(req, res) {
  Product.find({}, function (err, products) {
    res.render("product/index", { title: "Products", products });
  });
}

function create(req, res) {
  //product model
  const product = new Product(req.body);

  product.save(function (err, product) {
    // one way to handle errors
    if (err) return res.redirect("/product/add");
    console.log(product);
    // for now, redirect right back to new.ejs
    res.redirect("/product");
  });
}

function show(req, res) {
  Product.findById(req.params.id, function (err, product) {
    res.render("product", { title: "All Products", product });
    //why do we need the title here and what's after the comma
  });
}
// const product = new Product(req.body);
// product.save((error, product) => {
//   if (error) throw error;
//   res.json(product);
// });

module.exports = { index, create, newProduct, show };
