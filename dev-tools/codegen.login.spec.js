// Ferramenta auxiliar para iniciar o navegador já logado (via auth.json)
// Útil para inspeção visual, captura de seletores e prototipação com `page.pause()`
// Execute com: `npm run codegen:auth` ou `npx playwright test tools/playwright.codegen.auth.spec.js --headed`


const { test } = require('@playwright/test');
require('dotenv').config();

test.use({ storageState: 'auth.json' });

test('Codegen automatizado com login', async ({ page }) => {
  await page.goto(`${process.env.BASE_URL}/dash/`); // evita hardcode
  await page.pause();
});