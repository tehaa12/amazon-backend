const express = require("express");
const { db } = require("../firebase"); // Use the correct path for firebase.js in the backend
const { collection, addDoc } = require("firebase/firestore");

const router = express.Router(); // Create a new router

// Route for placing an order
router.post("/", async (req, res) => {
  const { userId, items, totalAmount } = req.body; // Add totalAmount if needed

  try {
    const docRef = await addDoc(collection(db, "orders"), {
      userId,
      items,
      totalAmount,
      status: "Pending", // Set default status
      rating: { rate: 0, count: 0 }, // Default rating
      createdAt: new Date(),
    });

    res.status(201).json({ orderId: docRef.id });
  } catch (error) {
    console.error("Error saving order:", error);
    res.status(500).json({ error: "Failed to save order" });
  }
});

module.exports = router; // Export the router
