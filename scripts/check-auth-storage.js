// Verifica se o arquivo auth.json (storageState) ainda é válido.
// Caso inválido ou ausente, dispara o login automático via global.setup.js.
//
// ✅ Uso principal: garantir que o ambiente está pronto antes de rodar testes E2E.
//
// 🔧 Execute manualmente com:
//     npm run check:auth
//
// 📦 Script usado em pipelines, debug local e validação de CI.
//     Veja também: scripts/loginAutomatic.js, tests/e2e/global.setup.js


const { chromium, expect } = require('@playwright/test');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const { AUTH_FILE_PATH } = require('../tests/e2e/helpers/constants');
const globalSetup = require('../tests/e2e/global.setup.js');

(async () => {
  if (!fs.existsSync(AUTH_FILE_PATH)) {
    console.log('⚠️ auth.json não existe. Executando login global...');
    await globalSetup();
    return;
  }

  const browser = await chromium.launch();
  const context = await browser.newContext({ storageState: AUTH_FILE_PATH });
  const page = await context.newPage();

  try {
    console.log(`🌐 Validando sessão em: ${process.env.BASE_URL}`);
    await page.goto(`${process.env.BASE_URL}/dash/`);
    await expect(page).toHaveURL(/\/dash\/$/, { timeout: 5000 });
    console.log('✅ Sessão válida! auth.json está funcional.');
  } catch (err) {
    console.warn('❌ Sessão inválida. Executando login global...');
    await globalSetup();
  } finally {
    await browser.close();
  }
})();
