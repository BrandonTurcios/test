const express = require('express')
const app = express()
const port = 3000
const pizzaRouter=require("./Routes/PizzaRoutes")
var cors = require('cors')
const ingredienteRouter=require("./Routes/IngredienteRoutes")
const menuRouter=require("./Routes/MenuRoutes")
var mongoose = require("mongoose");
 require("dotenv").config();
app.use(express.json());
app.use(cors());
app.use("/pizza",pizzaRouter);
app.use("/ingrediente",ingredienteRouter);
app.use("/menu",menuRouter);

mongoose.connect(process.env.MONGOOSE_KEY, {
  useNewUrlParser: true,
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})