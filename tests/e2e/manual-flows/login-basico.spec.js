
const { test, expect } = require('@playwright/test');
const { login } = require('../helpers/loginHelper');

test('Login Básico', async ({ page }) => {
  await login(page, 'admin', 'senha123');
  await expect(page).toHaveURL(/dashboard/);
});
