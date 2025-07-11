// run-all-tests.js
// Executa todos os testes Playwright e gera relatório simples

const { execSync } = require('child_process');
const fs = require('fs');

try {
  execSync('npx playwright test --reporter=list', { stdio: 'inherit' });
  // Para relatório HTML: 'npx playwright test --reporter=html'
  // Custom: salvar saída em arquivo ou processar logs
} catch (err) {
  console.error('Falha ao executar os testes:', err);
}
