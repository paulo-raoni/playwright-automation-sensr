// cleanup.js
// Limpa dados residuais e reseta ambiente para execução de testes automatizados

// Exemplo básico (ajuste para seu sistema!)
const fs = require('fs');
const path = require('path');

function limparMassaDeDados() {
  const pasta = path.join(__dirname, '../massa_dados');
  fs.readdirSync(pasta).forEach(file => {
    if (file.endsWith('.json')) {
      fs.writeFileSync(path.join(pasta, file), '[]'); // Zera arrays de dados
    }
  });
  console.log('Massa de dados zerada!');
}

limparMassaDeDados();
