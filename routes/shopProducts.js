const express = require("express");
const router = express.Router();

// Sample product data (replace with your database logic later)
const products = [
  { id: 1, title: "Product 1", price: 1000 },
  { id: 2, title: "Product 2", price: 2000 },
  { id: 3, title: "Product 3", price: 3000 },
];

// Get all products
router.get("/", (req, res) => {
  res.json(products);
});

// Get a single product by ID
router.get("/:id", (req, res) => {
  const product = products.find((p) => p.id === parseInt(req.params.id));
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: "Product not found" });
  }
});

module.exports = router;
