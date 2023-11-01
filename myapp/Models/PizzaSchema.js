const { default: mongoose, model, mongo } = require("mongoose");
const AllPizzas = new mongoose.Schema({
  nombre: { type: String, require: true },
  precio: { type: Number, require: true },
  sku: { type: String, require: true },
  ingredientes: {type: Array, require : true},
  tamaño :{type:String, require: true}
});

var myModel = mongoose.model("Pizzas", AllPizzas);
module.exports = myModel;