// tests/e2e/global.setup.js
const { chromium, expect } = require("@playwright/test");
const fs = require("fs");
const path = require("path");

// 🌱 Carrega variáveis do .env manualmente
function loadEnvManualmente() {
  const envPath = path.resolve(__dirname, "../../.env");

  if (!fs.existsSync(envPath)) {
    throw new Error("❌ Arquivo .env não encontrado!");
  }

  const content = fs.readFileSync(envPath, "utf8");
  content.split("\n").forEach((line) => {
    const [key, ...rest] = line.split("=");
    if (!key) return;
    const value = rest.join("=").trim().replace(/^['"]|['"]$/g, "");
    if (!process.env[key]) {
      process.env[key] = value;
    }
  });
}

// ✅ Verifica se variáveis obrigatórias estão definidas
function validarEnvObrigatorio(keys = []) {
  keys.forEach((key) => {
    if (!process.env[key]) {
      throw new Error(`❌ Variável ${key} não definida no .env`);
    }
  });
}

async function globalSetup() {
  loadEnvManualmente();

  validarEnvObrigatorio(["BASE_URL", "PLAYWRIGHT_USER", "PLAYWRIGHT_PASS"]);

  const authFile = "auth.json";
  const baseURL = process.env.BASE_URL;

  console.log("🔐 Iniciando autenticação global...");
  console.log("🌐 BASE_URL:", baseURL);
  console.log("👤 Usuário:", process.env.PLAYWRIGHT_USER);

  const browser = await chromium.launch();
  const page = await browser.newPage();

  try {
    await page.goto(baseURL, { waitUntil: "domcontentloaded" });
    console.log("✅ Página carregada:", page.url());

    await page.fill("input#login-username-input", process.env.PLAYWRIGHT_USER);
    await page.fill("input#login-password-input", process.env.PLAYWRIGHT_PASS);
    console.log("📨 Credenciais preenchidas.");

    await page.getByRole("button", { name: "Entrar" }).click();
    console.log("🔄 Clique em Entrar feito.");

    await expect(page).toHaveURL(/\/dash\/$/, { timeout: 10000 });
    await expect(
      page.getByRole("heading", { name: "Minha Experiência" })
    ).toBeVisible();
    console.log("📍 Validação da dashboard bem-sucedida.");

    await page.context().storageState({ path: authFile });
    console.log("✅ Login bem-sucedido! auth.json salvo.");

    const savedState = JSON.parse(fs.readFileSync(authFile, "utf-8"));
    console.log("📁 auth.json gerado:", JSON.stringify(savedState, null, 2));
  } catch (error) {
    console.error("❌ Erro durante o login automático:", error);
    throw error;
  } finally {
    await browser.close();
  }
}

// 🚀 Executa se for chamado diretamente
if (require.main === module) {
  globalSetup();
}

module.exports = globalSetup;
