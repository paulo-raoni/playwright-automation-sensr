// tests/e2e/auth.test.js
const { test, expect } = require('@playwright/test');
const { ensureAuthState } = require('./helpers/ensureAuthState');
const fs = require('fs');
require('dotenv').config();

test('deve carregar a página do dashboard diretamente e estar logado', async ({ page }) => {
  // Garante que está logado (usa auth.json ou faz login se necessário)
  await ensureAuthState(page);

  // Revalida após login garantido
  await page.goto(`${process.env.BASE_URL.replace(/\/$/, '')}/dash`);

  // Aguarda carregamento total da página
  await page.waitForLoadState('networkidle', { timeout: 10000 });

  // 🧪 Validação da rota
  await expect(page).toHaveURL(/\/dash\/$/, { timeout: 10000 });

  // Busca e espera o heading aparecer de fato
  const heading = page.getByRole('heading', { name: 'Minha Experiência' });

  try {
    await heading.waitFor({ state: 'visible', timeout: 15000 });
    await expect(heading).toBeVisible();
    console.log('✅ Heading "Minha Experiência" visível.');
  } catch (err) {
    console.warn('⚠️ Heading não apareceu. Capturando debug...');
    await page.screenshot({ path: 'erro-heading.png', fullPage: true });
    const html = await page.content();
    fs.writeFileSync('erro-heading.html', html);
    throw err;
  }
});
