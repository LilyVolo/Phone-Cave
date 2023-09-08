const mongoose = require("mongoose");
const { Schema, model } = mongoose;

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const phonesSchema = new Schema(
  {
    id: Number,
    name: String,
    manufacturer:  String,
    description: String,
    color: String,
    price: Number,
    imageFileName: String,
    screen: String,
    processor: String,
    ram: Number
  },

);

const Phone = model("Phone", phonesSchema);

module.exports = Phone;
