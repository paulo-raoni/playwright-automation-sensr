
/**
 * generate-mock-data.js
 * Gera dados fake para testes (usuários e tickets)
 */
const fs = require('fs');
const path = require('path');

function randomUser(i) {
  return {
    id: i,
    nome: `Usuário ${i}`,
    email: `usuario${i}@exemplo.com`,
    ativo: Math.random() > 0.2,
    perfil: Math.random() > 0.7 ? 'admin' : 'user'
  };
}

function randomTicket(i, users) {
  return {
    id: i,
    titulo: `Ticket ${i}`,
    criado_por: users[Math.floor(Math.random() * users.length)].email,
    status: ['aberto', 'em progresso', 'fechado'][Math.floor(Math.random()*3)],
    prioridade: ['baixa', 'media', 'alta'][Math.floor(Math.random()*3)]
  };
}

const users = Array.from({length: 10}, (_, i) => randomUser(i+1));
const tickets = Array.from({length: 25}, (_, i) => randomTicket(i+1, users));

const massaPath = path.resolve(__dirname, '../massa_dados');
if (!fs.existsSync(massaPath)) fs.mkdirSync(massaPath, { recursive: true });

fs.writeFileSync(path.join(massaPath, 'usuarios_teste.json'), JSON.stringify(users, null, 2));
fs.writeFileSync(path.join(massaPath, 'tickets_exemplo.json'), JSON.stringify(tickets, null, 2));

console.log('Massa de dados gerada: usuarios_teste.json & tickets_exemplo.json');
