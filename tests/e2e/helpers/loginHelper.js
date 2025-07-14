const dotenv = require('dotenv');
dotenv.config();

async function login(page, usuario, senha) {
  const baseUrl = process.env.BASE_URL || 'http://localhost:3000';
  await page.goto(baseUrl);

  if (baseUrl.includes('localhost')) {
    // 🌐 Ambiente mock: usa input[name=...] puro
    await page.fill('input[name="user"]', usuario);
    await page.fill('input[name="password"]', senha);
    await page.click('button[type="submit"]');

    // Espera por rota do mock
    await page.waitForURL('**/dashboard', { timeout: 5000 });
  } else {
    // 🌐 Ambiente real: usa getByRole com labels reais
    await page.getByRole('textbox', { name: 'Nome de Usuário' }).fill(usuario);
    await page.getByRole('textbox', { name: 'Senha' }).fill(senha);
    await page.getByRole('button', { name: 'Entrar' }).click();

    // Espera por rota protegida real
    await page.waitForURL('**/dash/', { timeout: 10000 });
  }
}

module.exports = { login };
