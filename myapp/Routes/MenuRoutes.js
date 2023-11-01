const express = require("express");
const router = express.Router();
const createMenu =require("../Controllers/MenuController") ;

router.post("/create",createMenu.createMenu);

module.exports = router;