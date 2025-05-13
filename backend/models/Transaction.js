const mongoose = require('mongoose');

// Define the schema for the transaction
const transactionSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      default: '',
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

// Create the model based on the schema
const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
