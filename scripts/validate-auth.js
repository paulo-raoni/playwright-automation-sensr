const { chromium, expect } = require('@playwright/test');
const fs = require('fs');
require('dotenv').config();

(async () => {
  const path = 'auth.json';
  if (!fs.existsSync(path)) {
    console.log('⚠️ auth.json não existe. Rodando login...');
    await loginAgain();
    return;
  }

  const browser = await chromium.launch();
  const context = await browser.newContext({ storageState: path });
  const page = await context.newPage();

  try {
    await page.goto(`${process.env.BASE_URL}/dash/`);
    await expect(page).toHaveURL(/\/dash\/$/, { timeout: 5000 });
    console.log('✅ Sessão válida! auth.json ok.');
  } catch (err) {
    console.warn('❌ auth.json inválido. Rodando login novamente...');
    await loginAgain();
  } finally {
    await browser.close();
  }

  async function loginAgain() {
    const setup = require('../tests/e2e/global.setup.js');
    await setup();
  }
})();
