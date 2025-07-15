const fs = require('fs');
const path = require('path');

/**
 * Captura HTML e screenshot da página em debug/{slug}/{label}.{ext}.
 * @param {import('@playwright/test').Page} page
 * @param {string} slug - nome da suíte ou teste
 * @param {string} label - nome do momento da falha (ex: 'erro-heading')
 */
async function captureDebugInfo(page, slug = 'geral', label = 'erro') {
  const debugDir = path.resolve(__dirname, '../../debug', slug);
  if (!fs.existsSync(debugDir)) fs.mkdirSync(debugDir, { recursive: true });

  const html = await page.content();
  fs.writeFileSync(path.join(debugDir, `${label}.html`), html);

  await page.screenshot({ path: path.join(debugDir, `${label}.png`), fullPage: true });
}

module.exports = { captureDebugInfo };
