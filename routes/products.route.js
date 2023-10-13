const express = require("express");
const { getProducs, seveProducts } = require("../controller/products.controller");
const router = express.Router();

router.get("/products",getProducs);

router.post("/products",seveProducts)

module.exports = router;