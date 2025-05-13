const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const transactionRoutes = require('./routes/transactions'); // Import your transaction routes
require('dotenv').config(); // Load environment variables from .env

const app = express(); // ✅ Define app before using it

// Middleware
app.use(cors()); // Enable CORS for all routes (you might want to restrict it to certain origins in production)
app.use(express.json()); // Parse incoming JSON requests

// Routes
app.use('/api/transactions', transactionRoutes); // All routes under /api/transactions will be handled by transactionRoutes

// Root Route to check if API is running
app.get('/', (req, res) => {
  res.send('API is running ✅');
});

// MongoDB Connection and Server Start
const PORT = process.env.PORT || 5000;

// Ensure MONGO_URI is set in your .env file
const mongoURI = process.env.MONGO_URI;
if (!mongoURI) {
  console.error('MongoDB URI is missing in environment variables.');
  process.exit(1); // Exit if there's no Mongo URI to connect to
}

// Connect to MongoDB using mongoose
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('✅ MongoDB Connected');
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
})
.catch((err) => {
  console.error('MongoDB connection error:', err);
  process.exit(1); // Exit if MongoDB connection fails
});
