const { default: mongoose, model, mongo } = require("mongoose");

const AllMenu = new mongoose.Schema({
  sku: { type: String, require: true },
  nombre: { type: String, require: true },
  combo: { type: Array, require: true },
  precio: { type: Number, require: true }
});

var myModel = mongoose.model("Menu", AllMenu);
module.exports = myModel;