require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY); // Use Stripe secret key from environment variable

// Initialize Express
const app = express();

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json()); // Parse incoming requests

// Routes
const productsRouter = require("./routes/shopProducts");
const ordersRouter = require("./routes/checkoutOrders");

app.use("/shop-products", productsRouter);
app.use("/checkout-orders", ordersRouter);

// Stripe Payment Intent Route
app.post("/create-payment-intent", async (req, res) => {
  const { amount, currency } = req.body;

  try {
    // Create a payment intent with the provided amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
    });

    // Send the client secret back to the frontend
    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error("Error creating payment intent:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Set the port (Render will set the PORT environment variable)
const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`API is running on port ${port}`);
});
