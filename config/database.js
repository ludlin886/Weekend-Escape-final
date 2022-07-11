//Import the mongoose module
const mongoose = require("mongoose");

//Set up default mongoose connection
mongoose.connect("mongodb://127.0.0.1:27017/products", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//Get the default connection
const db = mongoose.connection;

db.on("connected", function () {
  console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});
