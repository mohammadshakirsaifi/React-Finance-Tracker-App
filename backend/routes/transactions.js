const express = require('express');
const router = express.Router();
const Transaction = require('../models/Transaction');

// @route GET /api/transactions
router.get('/', async (req, res) => {
  try {
    const transactions = await Transaction.find().sort({ date: -1 });
    res.json(transactions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// @route GET /api/transactions/stats
router.get('/stats', async (req, res) => {
  try {
    const transactions = await Transaction.find();
    let income = 0;
    let expense = 0;

    transactions.forEach((txn) => {
      if (txn.amount > 0) {
        income += txn.amount;
      } else {
        expense += txn.amount;
      }
    });

    const balance = income + expense;

    res.json({ income, expense, balance });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// @route POST /api/transactions
router.post('/', async (req, res) => {
  const newTransaction = new Transaction(req.body);
  try {
    const saved = await newTransaction.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// @route DELETE /api/transactions/:id
router.delete('/:id', async (req, res) => {
  try {
    await Transaction.findByIdAndDelete(req.params.id);
    res.json({ message: 'Transaction deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
