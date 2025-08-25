const express = require('express');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/webapp';

const app = express();
app.use(express.json());

// --- Mongo (optional) ---
let Item;
(async () => {
  try {
    await mongoose.connect(MONGO_URL, { dbName: 'webapp' });
    const itemSchema = new mongoose.Schema(
      { name: { type: String, required: true } },
      { timestamps: true }
    );
    Item = mongoose.model('Item', itemSchema);
    console.log('[mongo] connected');
  } catch (err) {
    console.warn('[mongo] connect failed (app will still run):', err.message);
  }
})();

// --- Routes ---
app.get('/', (_req, res) => {
  res.send('Hello from Node WebApp 🚀');//what
});

app.get('/healthz', (_req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.get('/api/items', async (_req, res) => {
  try {
    if (!Item) return res.json([]);
    const items = await Item.find().sort({ createdAt: -1 });
    res.json(items);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.post('/api/items', async (req, res) => {
  try {
    if (!Item) return res.status(503).json({ error: 'DB not connected' });
    if (!req.body.name) return res.status(400).json({ error: 'name is required' });
    const created = await Item.create({ name: req.body.name });
    res.status(201).json(created);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// --- Start server ---
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

module.exports = app; // for tests
