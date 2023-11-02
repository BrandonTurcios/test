const express = require("express");
const router = express.Router();
const createdIngrediente=require("../Controllers/IngredienteController") ;

router.post("/create",createdIngrediente.createIngrediente);
router.get("/",createdIngrediente.getAllIngredientes);
router.put("/:sku", createdIngrediente.updateIngrediente);
router.delete("/delete/:sku", createdIngrediente.deleteIngrediente);

module.exports = router;