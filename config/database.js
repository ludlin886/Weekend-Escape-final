//Import the mongoose module
const mongoose = require("mongoose");

//Set up default mongoose connection
mongoose.connect(
  "mongodb+srv://ludlin886:Ludlin196958@cluster0.afmvot0.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

//Get the default connection
const db = mongoose.connection;

db.on("connected", function () {
  console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});
