const express = require('express');
const router = express.Router();
const { login } = require('../controllers/authController');

// router.post('/register', register);
router.post('/login', login);


// Dummy user data or replace with actual DB logic
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // You should replace this logic with real DB authentication
  if (email === "test@example.com" && password === "123456") {
    return res.status(200).json({ message: 'Login successful', token: 'abc123' });
  } else {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
});

module.exports = router;
