const mongoose = require("mongoose");
const productSchema = require("./product").productSchema;
const Schema = mongoose.Schema;

const cartSchema = new Schema(
  {
    product: [productSchema],
    crateDate: Date,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Cart", cartSchema);
