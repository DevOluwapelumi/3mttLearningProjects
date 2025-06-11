// Filename: server.js

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// In-memory data store
let items = [];
let currentId = 1;

// Root Route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// GET all items
app.get('/items', (req, res) => {
  res.json(items);
});

// GET single item by ID
app.get('/items/:id', (req, res) => {
  const item = items.find(i => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).json({ error: 'Item not found' });
  res.json(item);
});

// POST new item
app.post('/items', (req, res) => {
  const { name, description } = req.body;
  if (!name || !description) {
    return res.status(400).json({ error: 'Name and description are required' });
  }
  const newItem = {
    id: currentId++,
    name,
    description
  };
  items.push(newItem);
  res.status(201).json(newItem);
});

// PUT update item by ID
app.put('/items/:id', (req, res) => {
  const item = items.find(i => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).json({ error: 'Item not found' });

  const { name, description } = req.body;
  if (!name || !description) {
    return res.status(400).json({ error: 'Name and description are required' });
  }

  item.name = name;
  item.description = description;
  res.json(item);
});

// DELETE item by ID
app.delete('/items/:id', (req, res) => {
  const index = items.findIndex(i => i.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: 'Item not found' });

  items.splice(index, 1);
  res.status(204).send();
});

// Invalid route handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
