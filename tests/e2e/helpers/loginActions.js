
const { expect } = require("@playwright/test");

/**
 * Tenta clicar no botão "Entrar" com fallback
 */
async function clickLoginButton(page, logPrefix = "") {
  const prefix = logPrefix ? `[${logPrefix}] ` : "";
  try {
    console.log(`${prefix}🔍 Aguardando botão com seletor direto...`);
    await page.waitForSelector('button:has-text("Entrar")', { timeout: 8000 });
    console.log(`${prefix}👉 Clicando via seletor direto...`);
    await page.locator('button:has-text("Entrar")').click({ timeout: 5000 });
  } catch {
    console.warn(`${prefix}⚠️ Fallback FINAL: buscando por classe CSS bruta...`);
    const fallbackSelector = 'button[class*="MuiButton"][class*="contained"][class*="Primary"]';
    await page.waitForSelector(fallbackSelector, { timeout: 8000 });
    await page.locator(fallbackSelector).click({ force: true });
    console.log(`${prefix}✅ Clique via fallback de classe CSS executado.`);
  }
}

/**
 * Preenche o formulário de login e realiza o clique
 */
async function performLogin(page, usuario, senha, logPrefix = "") {
  const prefix = logPrefix ? `[${logPrefix}] ` : "";

  try {
    await page.fill("input#login-username-input", usuario);
    await page.fill("input#login-password-input", senha);
    console.log(`${prefix}📨 Credenciais preenchidas.`);
  } catch {
    console.warn(`${prefix}⚠️ Fallback: preenchendo por role...`);
    await page.getByRole("textbox", { name: /Usuário|E-mail/i }).fill(usuario);
    await page.getByRole("textbox", { name: /Senha/i }).fill(senha);
  }

  await clickLoginButton(page, logPrefix);
}


/**
 * Valida se o dashboard está visível.
 */
async function assertDashboardVisible(page, logPrefix = "") {
  const prefix = logPrefix ? `[${logPrefix}] ` : "";
  await page.waitForLoadState("networkidle", { timeout: 10000 });

  const heading = page.getByRole("heading", { name: "Minha Experiência" });
  try {
    await heading.waitFor({ state: "visible", timeout: 15000 });
    await expect(heading).toBeVisible();
    console.log(`${prefix}✅ Heading "Minha Experiência" visível.`);
  } catch (err) {
    console.warn(`${prefix}⚠️ Heading não apareceu.`);
    throw err;
  }
}


module.exports = {
  performLogin,
  assertDashboardVisible
};
