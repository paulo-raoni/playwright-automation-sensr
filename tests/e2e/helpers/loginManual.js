require("dotenv").config();
const { expect } = require("@playwright/test");
const { performLogin, assertDashboardVisible } = require("./loginActions");

async function loginManual(page, usuario, senha) {
  const baseUrl = process.env.BASE_URL || "http://localhost:3000";

  if (baseUrl.includes("localhost")) {
    console.log("🧪 Login em ambiente MOCK");
    await page.goto(baseUrl);
    await page.fill('input[name="user"]', usuario);
    await page.fill('input[name="password"]', senha);
    await page.click('button[type="submit"]');
    await page.waitForURL("**/dashboard", { timeout: 5000 });
    return;
  }

  await page.goto(baseUrl, { waitUntil: "domcontentloaded" });
  console.log("✅ Página carregada:", page.url());

  await performLogin(page, usuario, senha, "loginManual");
  await assertDashboardVisible(page, "loginManual");
}

module.exports = { loginManual };
