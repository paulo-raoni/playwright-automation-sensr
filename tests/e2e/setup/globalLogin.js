const { chromium } = require("@playwright/test");
const fs = require("fs");
const path = require("path");
const { loginAutomatic } = require("../helpers/loginAutomatic");
const { captureDebugInfo } = require("../helpers/captureDebug");
const { AUTH_FILE_PATH } = require("../helpers/constants");

async function performLoginGlobal() {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  try {
    fs.mkdirSync(path.dirname(AUTH_FILE_PATH), { recursive: true });

    await loginAutomatic(page, "global.setup");

    const savedState = JSON.parse(fs.readFileSync(AUTH_FILE_PATH, "utf-8"));
    const domain = savedState.cookies?.[0]?.domain || "desconhecido";
    const count = savedState.cookies?.length || 0;
    console.log(
      `📁 auth.json salvo com ${count} cookie(s) para domínio: ${domain}`
    );
  } catch (error) {
    console.error("❌ Erro durante o login automático:", error);
    await captureDebugInfo(page, "global-setup", "erro-login");
    throw error;
  } finally {
    await browser.close();
  }
}

module.exports = { performLoginGlobal };
