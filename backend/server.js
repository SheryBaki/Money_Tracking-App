const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

let data = {
  transactions: [],
  budgets: {},
  profile: {}
};

app.get('/data', (req, res) => {
  res.json(data);
});

app.post('/transactions', (req, res) => {
  data.transactions.unshift(req.body);
  res.json({ success: true });
});

app.delete('/transactions/:id', (req, res) => {
  const id = parseInt(req.params.id);
  data.transactions = data.transactions.filter(t => t.id !== id);
  res.json({ success: true });
});

app.listen(3000, () => console.log('Server running on 3000'));
