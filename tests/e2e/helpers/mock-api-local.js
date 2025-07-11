// mock-api-local.js
// Mocka endpoints para testar integração frontend sem backend real

const express = require('express');
const app = express();
app.use(express.json());

app.get('/api/tickets', (req, res) => {
  res.json([{ id: 1, title: 'Ticket Teste', status: 'aberto' }]);
});

app.post('/api/login', (req, res) => {
  if (req.body.user === 'admin' && req.body.pass === 'senha123') {
    res.json({ success: true, token: 'fake-jwt-token' });
  } else {
    res.status(401).json({ error: 'Credenciais inválidas' });
  }
});

// Simular erro
app.get('/api/fail', (req, res) => {
  res.status(500).json({ error: 'Erro simulado do servidor!' });
});

app.listen(3001, () => {
  console.log('Mock API rodando em http://localhost:3001');
});
