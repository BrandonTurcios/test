const express = require("express");
const router = express.Router();
const createdPizza =require("../Controllers/PizzaController") ;

router.post("/create",createdPizza.createPizza);
router.put("/:sku", createdPizza.updatePizza);
router.delete("/delete/:sku", createdPizza.deletePizza);
router.get("/",createdPizza.getAllPizza);
module.exports = router;