const express = require("express");
const ProductController = require("../controllers/Product");

const api = express.Router();

api.get("/get-products", ProductController.getProduct);
api.get("/get-product/:id", ProductController.getProd);
api.post("/add-product", ProductController.addProduct);
api.put("/update-product/:id", ProductController.updateProduct);
api.delete("/delete-product/:id", ProductController.deleteProd);

module.exports = api;
