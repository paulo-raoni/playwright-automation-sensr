
/**
 * compare-outputs.js
 * Deep diff para arquivos JSON (valida objetos aninhados)
 */
const fs = require('fs');

function deepDiff(a, b, path = '') {
  let diffs = [];
  if (typeof a !== typeof b) {
    diffs.push(`Tipo diferente em "${path}": ${typeof a} <> ${typeof b}`);
    return diffs;
  }
  if (typeof a === 'object' && a && b) {
    const keys = new Set([...Object.keys(a), ...Object.keys(b)]);
    for (const k of keys) {
      const subPath = path ? path + '.' + k : k;
      if (!(k in a)) {
        diffs.push(`Faltando em A: "${subPath}"`);
      } else if (!(k in b)) {
        diffs.push(`Faltando em B: "${subPath}"`);
      } else {
        diffs = diffs.concat(deepDiff(a[k], b[k], subPath));
      }
    }
  } else if (a !== b) {
    diffs.push(`Valor diferente em "${path}": "${a}" <> "${b}"`);
  }
  return diffs;
}

const [,, fileA, fileB] = process.argv;
if (!fileA || !fileB) {
  console.log('Uso: node compare-outputs.js arquivoA.json arquivoB.json');
  process.exit(1);
}
const jsonA = JSON.parse(fs.readFileSync(fileA, 'utf-8'));
const jsonB = JSON.parse(fs.readFileSync(fileB, 'utf-8'));
const diffs = deepDiff(jsonA, jsonB);
if (diffs.length) {
  console.log('Diferenças encontradas:\n' + diffs.join('\n'));
} else {
  console.log('Arquivos são idênticos.');
}
