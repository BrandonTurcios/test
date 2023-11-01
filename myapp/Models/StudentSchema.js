const { default: mongoose, model, mongo } = require("mongoose");

const AllStudents = new mongoose.Schema({
  id: { type: Number, require: true },
  name: { type: String, require: true },
  age: { type: Number, require: true },
});

var myModel = mongoose.model("MYStudents", AllStudents);
module.exports = myModel;