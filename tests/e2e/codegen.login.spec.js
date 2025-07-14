const { test } = require('@playwright/test');
require('dotenv').config();

test.use({ storageState: 'auth.json' });

test('Codegen automatizado com login', async ({ page }) => {
  await page.goto(`${process.env.BASE_URL}/dash/`); // evita hardcode
  await page.pause();
});