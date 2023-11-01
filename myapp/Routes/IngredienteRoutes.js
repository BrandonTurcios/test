const express = require("express");
const router = express.Router();
const createIngrediente=require("../Controllers/IngredienteController") ;

router.post("/create",createIngrediente.createIngrediente);

module.exports = router;