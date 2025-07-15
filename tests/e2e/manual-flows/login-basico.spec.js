const { test, expect } = require('@playwright/test');
const { loginManual } = require('../helpers/loginManual');
const { captureDebugInfo } = require('../helpers/captureDebug');
const dotenv = require('dotenv');
dotenv.config();

test.use({ storageState: undefined }); // Garante ambiente limpo

test('Login Básico', async ({ page }) => {
  const usuario = process.env.PLAYWRIGHT_USER;
  const senha = process.env.PLAYWRIGHT_PASS;

  // 🧪 Login manual ativado (sem reaproveitar storageState)
  await loginManual(page, usuario, senha);

  try {
    await expect(page).toHaveURL(/\/dash\/$/, { timeout: 10000 });
    console.log("✅ Redirecionamento após login confirmado.");
  } catch (err) {
    console.warn("⚠️ Redirecionamento não ocorreu como esperado. Capturando evidências...");
    await captureDebugInfo(page, 'login-basico', 'erro-redirect');
    throw err;
  }
});
