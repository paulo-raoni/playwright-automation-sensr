const fs = require("fs");
const path = require("path");

function loadEnvManualmente() {
  const envPath = path.resolve(__dirname, "../../../.env");
  if (!fs.existsSync(envPath)) throw new Error("❌ Arquivo .env não encontrado!");

  const content = fs.readFileSync(envPath, "utf8");
  content.split("\n").forEach((line) => {
    const [key, ...rest] = line.split("=");
    if (!key) return;
    const value = rest.join("=").trim().replace(/^['"]|['"]$/g, "");
    if (!process.env[key]) process.env[key] = value;
  });
}

function validarEnvObrigatorio(keys = []) {
  keys.forEach((key) => {
    if (!process.env[key]) throw new Error(`❌ Variável ${key} não definida no .env`);
  });
}

module.exports = {
  loadEnvManualmente,
  validarEnvObrigatorio,
};
