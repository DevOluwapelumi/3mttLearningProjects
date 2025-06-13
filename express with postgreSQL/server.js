// Filename: server.js

const express = require('express');
const { Pool } = require('pg');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// PostgreSQL Connection Configuration
const pool = new Pool({
  user: 'your_pg_user',      // Replace with your PostgreSQL username
  host: 'localhost',
  database: 'your_db_name',  // Replace with your PostgreSQL database name
  password: 'your_password', // Replace with your PostgreSQL password
  port: 5432,                // Default PostgreSQL port
});

// Routes

// Root Route
app.get('/', (req, res) => {
  res.send('Welcome to the PostgreSQL Express API!');
});

// GET all users
app.get('/users', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve users' });
  }
});

// GET user by ID
app.get('/users/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve user' });
  }
});

// POST create a new user
app.post('/users', async (req, res) => {
  const { name, email, age } = req.body;
  if (!name || !email || !age) {
    return res.status(400).json({ error: 'All fields are required' });
  }
  try {
    const result = await pool.query(
      'INSERT INTO users (name, email, age) VALUES ($1, $2, $3) RETURNING *',
      [name, email, age]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create user' });
  }
});

// PUT update user
app.put('/users/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  const { name, email, age } = req.body;
  if (!name || !email || !age) {
    return res.status(400).json({ error: 'All fields are required' });
  }
  try {
    const result = await pool.query(
      'UPDATE users SET name = $1, email = $2, age = $3 WHERE id = $4 RETURNING *',
      [name, email, age, id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update user' });
  }
});

// DELETE user
app.delete('/users/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const result = await pool.query('DELETE FROM users WHERE id = $1 RETURNING *', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete user' });
  }
});

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
