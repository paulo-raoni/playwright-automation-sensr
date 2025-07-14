// tests/e2e/manual-flows/login-basico.spec.js
const { test, expect } = require('@playwright/test');
const { login } = require('../helpers/loginHelper');
const usuarios = require('../massa_dados/usuarios_teste.json');

test('Login Básico', async ({ page }) => {
  const user = usuarios.find(u => u.usuario === 'admin');
  await login(page, user.usuario, user.senha);

  // Valida que caiu exatamente na rota correta
  await expect(page).toHaveURL(/\/dash\/$/, { timeout: 10000 });
});
