const express = require('express');
const app = express();
const port = 3000;

// Para parsear form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Página de login fake
app.get('/login', (req, res) => {
  res.send(`
    <form method="POST" action="/login">
      <input name="user" placeholder="Usuário" />
      <input name="password" placeholder="Senha" type="password"/>
      <button type="submit">Entrar</button>
    </form>
  `);
});

// Autenticação fake
app.post('/login', (req, res) => {
  const { user, password } = req.body;
  if (user === 'admin' && password === 'senha123') {
    res.redirect('/dashboard');
  } else {
    res.send('Login falhou!');
  }
});

// Dashboard fake
app.get('/dashboard', (req, res) => {
  res.send('<h2>Dashboard Logado! (Mock Server)</h2>');
});

app.listen(port, () => {
  console.log(`Mock server rodando em http://localhost:${port}`);
});
