const fs = require("fs");
const { performLogin, assertDashboardVisible } = require("./loginActions");
const { captureDebugInfo } = require("./captureDebug");
require("dotenv").config();

async function loginAutomatic(page, logPrefix = "") {
  const { AUTH_FILE_PATH } = require("./constants");

  if (fs.existsSync(AUTH_FILE_PATH)) {
    try {
      console.log("🔁 Carregando estado salvo de login...");
      const raw = fs.readFileSync(AUTH_FILE_PATH, "utf-8");
      const state = JSON.parse(raw);
      await page.context().addCookies(state.cookies || []);
    } catch (err) {
      console.warn(
        "⚠️ Falha ao ler ou parsear auth.json. Recriando login do zero..."
      );
      fs.unlinkSync(AUTH_FILE_PATH); // remove arquivo inválido
    }
  }

  await page.goto(`${process.env.BASE_URL.replace(/\/$/, "")}/dash`);
  try {
    await page
      .getByRole("heading", { name: "Minha Experiência" })
      .waitFor({ timeout: 3000 });
    console.log("✅ Sessão válida detectada.");
    return;
  } catch {
    console.warn("⚠️ Sessão inválida. Refazendo login...");
  }

  try {
    await page.goto(`${process.env.BASE_URL.replace(/\/$/, "")}/`);
    await performLogin(
      page,
      process.env.PLAYWRIGHT_USER,
      process.env.PLAYWRIGHT_PASS,
      logPrefix
    );
    await assertDashboardVisible(page, logPrefix);
  } catch (err) {
    await captureDebugInfo(page, "ensure-auth", "erro-login");
    throw err;
  }

  console.log("✅ Login bem-sucedido! auth.json salvo.");

  const newState = await page.context().storageState();
  fs.writeFileSync(AUTH_FILE_PATH, JSON.stringify(newState, null, 2));
  console.log("💾 Novo auth.json salvo.");
}

module.exports = { loginAutomatic };
