const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    name: { type: String, required: true },
    decription: { type: String, required: true },
    price: { type: Number, min: 0, max: 9999, default: 9999 },
    avaliable: { type: Boolean, default: false },
    avaliableDateFrom: { type: Date },
    quantity: { type: Number, min: 1, max: 99 },
  },
  {
    timestamps: true,
  }
);

module.exports = {
  mongooseName: mongoose.model("Product", productSchema),
  productSchema,
};
