const fs = require("fs");
const path = require("path");
const { expect } = require("@playwright/test");
require("dotenv").config();

async function ensureAuthState(page) {
  const authPath = path.resolve("auth.json");

  // 🔁 Reutiliza sessão salva, se houver
  if (fs.existsSync(authPath)) {
    console.log("🔁 Carregando estado salvo de login...");
    const state = JSON.parse(fs.readFileSync(authPath));
    await page.context().addCookies(state.cookies || []);
  }

  // 🧪 Testa se já está logado
  await page.goto(`${process.env.BASE_URL.replace(/\/$/, '')}/dash`);
  try {
    await page.getByRole("heading", { name: "Minha Experiência" }).waitFor({ timeout: 3000 });
    console.log("✅ Sessão válida detectada.");
    return;
  } catch {
    console.warn("⚠️ Sessão inválida. Refazendo login...");
  }

  // 🔐 Login manual
  await page.goto(`${process.env.BASE_URL.replace(/\/$/, '')}/`);
  await page.fill("input#login-username-input", process.env.PLAYWRIGHT_USER);
  await page.fill("input#login-password-input", process.env.PLAYWRIGHT_PASS);
  console.log("📨 Credenciais preenchidas.");

  try {
    console.log("🔍 Aguardando botão com seletor direto...");
    await page.waitForSelector('button:has-text("Entrar")', { timeout: 8000 });
    console.log("👉 Clicando via seletor CSS...");
    await page.locator('button:has-text("Entrar")').click({ timeout: 5000 });
  } catch (e) {
    console.warn("⚠️ Fallback FINAL: buscando por classe CSS bruta...");

    const fallbackSelector = 'button[class*="MuiButton"][class*="contained"][class*="Primary"]';
    try {
      await page.waitForSelector(fallbackSelector, { timeout: 8000 });
      await page.locator(fallbackSelector).click({ force: true });
      console.log("✅ Clique via fallback de classe CSS executado.");
    } catch (err) {
      console.error("❌ Nenhum botão 'Entrar' encontrado nem com CSS bruto.");
      const html = await page.content();
      fs.writeFileSync("body-dump.html", html);
      await page.screenshot({ path: "erro-entrar.png", fullPage: true });
      throw err;
    }
  }

  // ✅ Aguarda finalização do reload pós-login e presença do dashboard
  try {
    await page.waitForLoadState('networkidle', { timeout: 10000 });
    await expect(page.getByRole("heading", { name: "Minha Experiência" })).toBeVisible({ timeout: 10000 });
    console.log("🔐 Login automatizado concluído.");
  } catch (err) {
    console.error("❌ Não foi possível validar o login via heading. Salvando diagnóstico...");
    const html = await page.content();
    fs.writeFileSync("body-dump.html", html);
    await page.screenshot({ path: "erro-heading.png", fullPage: true });
    throw err;
  }

  // 💾 Salva estado novo
  const newState = await page.context().storageState();
  fs.writeFileSync(authPath, JSON.stringify(newState, null, 2));
  console.log("💾 Novo auth.json salvo.");
}

module.exports = { ensureAuthState };
