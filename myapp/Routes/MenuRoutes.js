const express = require("express");
const router = express.Router();
const createdMenu =require("../Controllers/MenuController") ;

router.post("/create",createdMenu.createMenu);
router.put("/:sku", createdMenu.updateMenu);
router.delete("/delete/:sku", createdMenu.deleteMenu);
module.exports = router;