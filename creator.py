import os

# Diretórios padrão
HELPERS_DIR = os.path.join("tests", "e2e", "helpers")
MANUAL_FLOWS_DIR = os.path.join("tests", "e2e", "manual-flows")

# 1️⃣ loginHelper.js (CommonJS, universal para Node/Playwright)
login_helper_js = '''\
async function login(page, usuario, senha) {
  await page.goto('https://sistema-exemplo.com/login');
  await page.fill('input[name="user"]', usuario);
  await page.fill('input[name="password"]', senha);
  await page.click('button[type="submit"]');
}
module.exports = { login };
'''

# 2️⃣ login-basico.spec.ts (TypeScript, padrão Playwright)
login_basico_spec_ts = '''\
import { test, expect } from '@playwright/test';
const { login } = require('../helpers/loginHelper');

test('Login Básico', async ({ page }) => {
  await login(page, 'admin', 'senha123');
  await expect(page).toHaveURL(/dashboard/);
});
'''

# Cria os diretórios caso não existam
os.makedirs(HELPERS_DIR, exist_ok=True)
os.makedirs(MANUAL_FLOWS_DIR, exist_ok=True)

# Salva/replace os arquivos
with open(os.path.join(HELPERS_DIR, "loginHelper.js"), "w", encoding="utf-8") as f:
    f.write(login_helper_js)

with open(os.path.join(MANUAL_FLOWS_DIR, "login-basico.spec.ts"), "w", encoding="utf-8") as f:
    f.write(login_basico_spec_ts)

print("Arquivos sobrescritos com sucesso! (CommonJS e TS padrão Playwright)")
