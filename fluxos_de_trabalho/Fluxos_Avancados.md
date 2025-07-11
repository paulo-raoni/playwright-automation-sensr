
---

# Fluxos Avançados – Casos Especiais e Troubleshooting

---

## 🔐 Login com 2FA e Confirmação por E-mail

Fluxos protegidos por **autenticação em dois fatores** ou que exigem **confirmação por e-mail** precisam ser automatizados em ambiente seguro, usando mocks SMTP como Mailhog, Mailosaur ou Maildev.

### Exemplo Playwright + Mailhog (reset de senha)

```js
// Dispara fluxo que envia e-mail
await page.goto('https://sistema.com/recuperar-senha');
await page.fill('input[name="email"]', 'qa-teste@mailhog.local');
await page.click('button#enviar-email');

// Captura o e-mail no mock SMTP
const apiRequest = await request.newContext({ baseURL: 'http://localhost:8025/api/v2' });
const resp = await apiRequest.get('/messages');
const { items } = await resp.json();
const email = items.find(msg => msg.Content.Headers.Subject[0].includes('Recuperação de Senha'));

// Extrai link/token do corpo do e-mail
const body = email.Content.Body;
const tokenMatch = body.match(/token=([a-zA-Z0-9]+)/);
const resetToken = tokenMatch[1];

// Segue o link e finaliza o fluxo
await page.goto(`https://sistema.com/resetar-senha?token=${resetToken}`);
await page.fill('input[name="nova_senha"]', 'SenhaSuperNova123');
await page.click('button#salvar');
await expect(page.locator('.alert')).toContainText('Senha redefinida');
```

> **Dica:**
> Mocks SMTP isolam testes e evitam spam real.
> Teste com dados únicos para evitar dependências entre execuções.

---

## 🛠️ Debugging de Testes Intermitentes (“Flakey tests”)

Problemas clássicos de automação: **teste falha “às vezes”, timeout aleatório, execução diferente no CI**.

### Práticas recomendadas:

* **Sempre use** `await expect(...)` para esperar elementos.
* Utilize `test.retry()` no topo do arquivo para permitir reruns controlados.
* Gere **screenshots e vídeos** automáticos de todas as falhas:

  ```js
  // No playwright.config.ts
  use: {
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure'
  }
  ```
* Use comandos de log: `console.log` ou `page.on('console', ...)`.
* Para analisar requests:

  ```js
  page.on('request', request => {
    console.log('Request: ' + request.url());
  });
  ```
* Valide ambiente:
  Sempre cheque se as variáveis (URL, data, user) são o que espera!

> **Dica:**
> Nunca confie em `waitForTimeout` puro! Prefira `waitForSelector` ou asserts.

---

## 📁 Upload/Download de Arquivos & Validação de PDF/Excel

### Download e Validação de Arquivo PDF

```js
const [download] = await Promise.all([
  page.waitForEvent('download'),
  page.click('button#baixar-pdf')
]);
const pdfPath = await download.path();
// Validar assinatura digital com pdf-lib, node-pdfreader, etc
```

### Upload de Arquivo Simulado

```js
await page.setInputFiles('input[type="file"]', './tests/fixtures/arquivo-exemplo.pdf');
await page.click('button#enviar-arquivo');
await expect(page.locator('.alert')).toContainText('Upload realizado');
```

### Validação de Excel

* Use libs como [xlsx](https://www.npmjs.com/package/xlsx) para ler e comparar conteúdo pós-download.

---

## 🌐 Mock de API, Interceptação e Simulação de Falhas

Simule **erros do backend, dados diferentes ou delays** com `page.route`.

### Erro 500 no Endpoint

```js
await page.route('**/api/financeiro/detalhes', async (route, request) => {
  await route.fulfill({
    status: 500,
    contentType: 'application/json',
    body: JSON.stringify({ error: 'Erro simulado!' }),
  });
});
await page.goto('https://sistema.com/financeiro');
await page.click('button#carregar-detalhes');
await expect(page.locator('.alert')).toContainText('Erro simulado!');
```

### Simular Timeout

```js
await page.route('**/api/lenta', async (route) => {
  setTimeout(() => route.continue(), 8000);
});
```

> **Dica:**
> Interceptação é sua aliada para garantir cobertura de erros e UI responsiva.

---

## 🚦 Pipeline CI/CD: Testes Headless e Artefatos

### Exemplo de Github Actions: playwright.yml

```yaml
name: Playwright Tests
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '18'
      - name: Install deps
        run: npm ci
      - name: Install browsers
        run: npx playwright install --with-deps
      - name: Run Playwright tests
        run: npx playwright test
      - name: Upload report
        uses: actions/upload-artifact@v4
        with:
          name: playwright-report
          path: playwright-report
```

**Boas práticas:**

* Sempre armazene screenshots e traces de falhas.
* Separe ambientes de QA, Homolog e Prod.
* Rodar testes “headless” sempre (sem abrir o browser visualmente).
* Use variáveis de ambiente para usuários/senhas de teste.

---

## 🧠 Outras Situações Avançadas

### Multiusuário Sincronizado

* Use `browser.newContext()` para simular vários usuários (exemplo em Exemplos.md).

### Snapshot Visual / Regressão de Layout

* Use `expect(page).toHaveScreenshot()` e integre com Percy/Chromatic para regressão visual real.

### Teste de fluxos em múltiplas abas

```js
const page1 = await context.newPage();
const page2 = await context.newPage();
// Fluxo cruzado entre abas
```

### Teste com dados dinâmicos e fixtures

* Carregue dados do `massa_dados/usuarios_teste.json` para rodar o mesmo teste com múltiplos usuários.

---

> **Este arquivo é um repositório vivo de hacks, soluções e receitas para automação. Colabore, mantenha atualizado, e use como fonte de consulta para os cenários mais “cascudos” do sistema!**

---
