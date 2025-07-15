const { loadEnvManualmente, validarEnvObrigatorio } = require("./envLoader");
const { performLoginGlobal } = require("./globalLogin");

// Ignora login se for teste de login manual
const isLoginBasico = process.argv.some((arg) =>
  arg.includes("login-basico.spec.js")
);

async function globalSetup() {
  if (isLoginBasico) {
    console.log("🧪 Detecção de login-basico.spec.js — pulando login global...");
    return;
  }

  loadEnvManualmente();
  validarEnvObrigatorio(["BASE_URL", "PLAYWRIGHT_USER", "PLAYWRIGHT_PASS"]);

  console.log("🔐 Iniciando autenticação global...");
  console.log("🌐 BASE_URL:", process.env.BASE_URL);
  console.log("👤 Usuário:", process.env.PLAYWRIGHT_USER);

  await performLoginGlobal();
}

if (require.main === module) {
  globalSetup();
}

module.exports = globalSetup;
