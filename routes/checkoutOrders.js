const express = require("express");
const router = express.Router();
const { db } = require("../firebase"); // Import your Firestore instance

// Place an order
router.post("/", async (req, res) => {
  const orderData = req.body;
  try {
    // Save the order to Firestore or your database
    // (This example assumes you have set up Firestore)
    await db.collection("orders").add(orderData);
    res.status(201).json({ message: "Order placed successfully" });
  } catch (error) {
    console.error("Error placing order:", error);
    res.status(500).json({ error: "Failed to place order" });
  }
});

module.exports = router;
