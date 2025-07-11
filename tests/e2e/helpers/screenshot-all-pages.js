
/**
 * screenshot-all-pages.js
 * Tira screenshots de todas as páginas listadas e salva em docs/imagens/
 */
const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

(async () => {
  const urls = [
    'https://enderecodomeusistema.com/login',
    'https://enderecodomeusistema.com/dashboard',
    'https://enderecodomeusistema.com/tickets'
    // Adicione mais rotas aqui!
  ];

  const dir = path.resolve(__dirname, '../../../docs/imagens');
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  const browser = await chromium.launch();
  const page = await browser.newPage();

  for (const url of urls) {
    await page.goto(url, { waitUntil: 'networkidle' });
    const nomeArquivo = (url.split('/').pop() || 'home') + '.png';
    const caminho = path.join(dir, nomeArquivo);
    await page.screenshot({ path: caminho, fullPage: true });
    console.log('Screenshot salvo em:', caminho);
  }

  await browser.close();
})();
