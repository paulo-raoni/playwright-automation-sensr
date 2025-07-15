const { test } = require("@playwright/test");
const { loginAutomatic } = require("./helpers/loginAutomatic");
const { assertDashboardVisible } = require("./helpers/loginActions");
const { captureDebugInfo } = require("./helpers/captureDebug");
const fs = require("fs");
require("dotenv").config();

test("deve carregar a página do dashboard diretamente e estar logado", async ({
  page,
}) => {
  // Garante que está logado (usa auth.json ou faz login se necessário)
  await loginAutomatic(page);

  // Revalida após login garantido
  await page.goto(`${process.env.BASE_URL.replace(/\/$/, "")}/dash`);

  try {
    await assertDashboardVisible(page, "auth-test");
  } catch (err) {
    await captureDebugInfo(page, "auth-test", "erro-heading");
    throw err;
  }
});
