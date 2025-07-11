Perfeito!
Aqui vai um exemplo realista, **fictício**, completo e comentado, para popular o `Exemplos.md`.
Você pode adaptar conforme o sistema, mas o modelo já serve para qualquer onboarding, QA ou dev.

---

````markdown
# Exemplos Reais de Fluxos Playwright

---

## 1️⃣ Fluxo Completo – Criação de Ticket de Suporte

### 🎯 **Contexto do Fluxo**
Este exemplo cobre um fluxo típico do sistema de chamados: login, navegação ao módulo de tickets, criação de um novo chamado, anexando arquivo e validação do resultado.

---

### 📝 **Código gerado (bruto via codegen):**

```js
await page.goto('https://sistema-exemplo.com/login');
await page.fill('input[name="user"]', 'suporte123');
await page.fill('input[name="password"]', 'senhaSecreta!');
await page.click('button[type="submit"]');
await page.waitForNavigation();
await page.click('a[href="/chamados"]');
await page.click('button#novo-ticket');
await page.fill('input[name="titulo"]', 'Erro ao gerar relatório');
await page.fill('textarea[name="descricao"]', 'Usuário não consegue gerar relatório financeiro.');
await page.setInputFiles('input[type="file"]', 'C:/Users/QA/Desktop/print_erro.png');
await page.click('button#enviar-ticket');
await page.waitForNavigation();
await page.click('a[href="/chamados"]');
````

---

### 🛠️ **Código refinado para automação:**

```js
await page.goto('https://sistema-exemplo.com/login');
await page.fill('input[name="user"]', 'suporte123');
await page.fill('input[name="password"]', 'senhaSecreta!');
await page.click('button[type="submit"]');

// Asserção: login redireciona para dashboard
await expect(page).toHaveURL(/.*dashboard.*/);

// Navega até a tela de chamados
await page.click('a[href="/chamados"]');
await expect(page).toHaveURL(/.*chamados.*/);

// Inicia criação de novo ticket
await page.click('button#novo-ticket');

// Preenche formulário
await page.fill('input[name="titulo"]', 'Erro ao gerar relatório');
await page.fill('textarea[name="descricao"]', 'Usuário não consegue gerar relatório financeiro.');

// Anexa arquivo (simulado)
await page.setInputFiles('input[type="file"]', 'C:/Users/QA/Desktop/print_erro.png');

// Envia ticket
await page.click('button#enviar-ticket');

// Valida sucesso na criação (mensagem ou redirecionamento)
await expect(page.locator('.toast-success')).toHaveText(/Ticket criado com sucesso/);

// Valida se ticket aparece na lista
await page.click('a[href="/chamados"]');
await expect(page.locator('table')).toContainText('Erro ao gerar relatório');

// Print de confirmação
await page.screenshot({ path: 'ticket-criado-ok.png' });
```

---

### 📌 **Observações e Dicas**

* Troque o caminho do arquivo anexado para um válido na sua máquina/teste.
* Sempre adapte seletores (`button#novo-ticket`, `.toast-success`, etc.) para os nomes reais do seu sistema.
* Inclua sempre asserts para validação (URL, texto, presença de elemento).
* O print final serve tanto para debugging quanto para documentação do resultado.

---

## 2️⃣ Fluxo de Edição de Perfil (Exemplo Fictício Rápido)

```js
await page.goto('https://sistema-exemplo.com/login');
await page.fill('input[name="user"]', 'devRaoni');
await page.fill('input[name="password"]', 'senhaF0rt3!');
await page.click('button[type="submit"]');
await page.click('a[href="/perfil"]');
await page.fill('input[name="telefone"]', '11987654321');
await page.click('button#salvar');
await expect(page.locator('.alert')).toContainText('Perfil atualizado com sucesso');
```

---


Excelente! Aqui vão **cinco exemplos mais avançados**, cada um cobrindo casos "vida real" **fora da caixinha** que muita gente sente dificuldade de automatizar no Playwright.
Cada exemplo tem: contexto do fluxo, possíveis desafios e um esqueleto de código refinado/comentado.

---

### 3️⃣ **Fluxo com Envio de E-mail e Validação de Caixa de Entrada**

**Contexto:**
Após criar um usuário ou acionar uma recuperação de senha, o sistema envia um e-mail para confirmação. O teste precisa garantir que o e-mail chega, abrir o link de confirmação ou capturar o código.

**Desafios:**

* Integrar com uma caixa de e-mail de teste (Mailtrap, Mailosaur, ou serviço temporário)
* Extrair link/código do e-mail para seguir fluxo

```js
// Cria usuário normalmente
await page.goto('https://sistema.com/cadastro');
await page.fill('input[name="email"]', 'teste.user@inboxmail.com');
await page.fill('input[name="nome"]', 'Usuário QA');
await page.click('button#criar-usuario');
await expect(page.locator('.alert')).toHaveText(/Cadastro realizado/);

// Aguarda envio de e-mail (exemplo usando Mailosaur API)
const mailosaur = require('mailosaur');
const client = new mailosaur('API_KEY');
const email = await client.messages.get('SERVER_ID', {
  sentTo: 'teste.user@inboxmail.com'
});

// Extrai link do corpo do e-mail
const confirmationLink = email.html.links[0].href;

// Abre link de confirmação no Playwright
await page.goto(confirmationLink);
await expect(page.locator('.alert')).toContainText('E-mail confirmado com sucesso');
```

---

### 4️⃣ **Fluxo com Download de PDF/Planilha e Validação**

**Contexto:**
O usuário realiza uma sequência de ações e, ao final, baixa um arquivo (PDF/XLS). O teste deve garantir que o download acontece e que o arquivo não está corrompido.

**Desafios:**

* Capturar o evento de download do Playwright
* Validar que o arquivo foi baixado e tem conteúdo esperado

```js
await page.goto('https://sistema.com/relatorios');
await page.fill('input[name="data_inicio"]', '2024-01-01');
await page.fill('input[name="data_fim"]', '2024-01-31');
await page.click('button#gerar-relatorio');

const [ download ] = await Promise.all([
  page.waitForEvent('download'),
  page.click('button#baixar-pdf') // Ou .xls
]);

const filePath = await download.path();
console.log('Arquivo salvo em:', filePath);

// (Opcional) Validar conteúdo mínimo do arquivo (PDF, XLS)
// Exemplo: usar pdf-parse ou xlsx para checar palavras/chaves
const fs = require('fs');
const buffer = fs.readFileSync(filePath);
// Aqui entra a validação customizada, dependendo do formato do arquivo
```

---

### 5️⃣ **Fluxo de Liberação de Acesso e Login em Outra Sessão**

**Contexto:**
Um administrador libera o acesso de outro usuário, que em seguida precisa logar em outro navegador/aba para testar o novo perfil.

**Desafios:**

* Gerenciar múltiplos contextos/browser no Playwright
* Validar que permissões/acessos funcionam conforme esperado

```js
// Admin concede acesso
await page.goto('https://sistema.com/admin/users');
await page.click('button#liberar-acesso-userB');
await expect(page.locator('.toast-success')).toHaveText('Acesso liberado');

// Novo contexto: login como userB
const userContext = await browser.newContext();
const userPage = await userContext.newPage();
await userPage.goto('https://sistema.com/login');
await userPage.fill('input[name="user"]', 'userB');
await userPage.fill('input[name="password"]', 'senhaUserB');
await userPage.click('button[type="submit"]');

// Valida acesso na área restrita
await expect(userPage.locator('.welcome')).toContainText('Bem-vindo, userB');
await userContext.close();
```

---

### 6️⃣ **Validação de Dado via Request Direto (API) após Ação no Front**

**Contexto:**
Após executar uma ação no frontend (ex: aprovar um cadastro), um dado muda no backend, mas não é exibido na interface.
Precisa consultar a API ou fazer um GET via Playwright/request/curl para validar.

**Desafios:**

* Usar o `APIRequestContext` do Playwright para chamada HTTP autenticada
* Garantir sincronismo (ação > backend)

```js
// Aprova item no frontend
await page.goto('https://sistema.com/aprovacao');
await page.click('button#aprovar-item-42');
await expect(page.locator('.status')).toContainText('Aprovado');

// Cria contexto de request autenticado
const apiRequest = await request.newContext({
  baseURL: 'https://sistema.com/api',
  extraHTTPHeaders: {
    // Exemplo: token do usuário logado
    'Authorization': `Bearer ${authToken}`
  }
});

// Consulta status via API
const response = await apiRequest.get('/itens/42');
const data = await response.json();

if (data.status !== 'aprovado') {
  throw new Error('Status no backend divergente!');
}
```

---

### 7️⃣ **Múltiplas Telas e Abas – Sincronização e Interação Cruzada**

**Contexto:**
O usuário faz uma sequência de ações em uma aba, depois abre outra tela em nova aba, valida um dado, fecha a aba e volta para finalizar a ação inicial.

**Desafios:**

* Controlar múltiplas abas/páginas
* Garantir sincronismo (não perder o contexto principal)

```js
await page.goto('https://sistema.com/tarefa-principal');
await page.click('button#iniciar-processo');
await page.fill('input[name="info"]', 'Teste avançado');
await page.click('button#prosseguir');

// Abre nova aba para conferir status em outro módulo
const [novaAba] = await Promise.all([
  context.waitForEvent('page'),
  page.click('a[target="_blank"][href="/relatorios/status"]')
]);

await novaAba.waitForLoadState();
await expect(novaAba.locator('.status-geral')).toContainText('Em andamento');
await novaAba.close();

// De volta à aba principal
await page.click('button#finalizar-processo');
await expect(page.locator('.toast-success')).toContainText('Processo finalizado');
```

---


Você pediu, agora é para **gente grande**.
Aqui vão exemplos ultra-hardcore, numerados a partir de 8️⃣, sempre com contexto + comentários para facilitar o reuso e adaptação em qualquer projeto.

---

### 8️⃣ **Automação de Assinatura Digital (Click to Sign + Validação em PDF)**

**Contexto:**
Usuário gera um documento, assina digitalmente via popup/modal com PIN/token, baixa o PDF e valida se a assinatura foi realmente embutida no arquivo.

**Desafios:**

* Automatizar popups/token/PIN com timeout
* Validar assinatura digital dentro do PDF (exige biblioteca externa)

```js
await page.goto('https://sistema.com/documentos');
await page.click('button#gerar-contrato');

// Inicia assinatura digital
await page.click('button#assinar-digitalmente');
await page.fill('input[name="token"]', '123456'); // Token enviado por SMS/app
await page.click('button#confirmar-assinatura');

// Espera confirmação
await expect(page.locator('.toast-success')).toContainText('Documento assinado');

// Baixa o PDF assinado
const [download] = await Promise.all([
  page.waitForEvent('download'),
  page.click('button#baixar-pdf')
]);
const pdfPath = await download.path();

// Valida assinatura digital (exemplo: pdf-lib ou outra lib de verificação)
const { PDFDocument } = require('pdf-lib');
const fs = require('fs');
const pdfBytes = fs.readFileSync(pdfPath);
const pdfDoc = await PDFDocument.load(pdfBytes);
// (Aqui você teria que analisar metadados, campo de assinatura, etc.)
// Dica: use scripts prontos de verificação ou integrações com ferramentas como iText, OpenSSL, etc.
```

---

### 9️⃣ **Mock SMTP: Capturando e Testando E-mails em Ambiente Controlado**

**Contexto:**
Após um fluxo (cadastro, recuperação de senha), precisa garantir que o e-mail foi enviado com conteúdo correto, usando um mock SMTP rodando localmente ou via Docker.

**Desafios:**

* Automatizar a coleta do e-mail do mock (MailHog, Mailcatcher, etc.)
* Parsear o conteúdo do e-mail e seguir links/códigos

```js
await page.goto('https://sistema.com/recuperar-senha');
await page.fill('input[name="email"]', 'qa-teste@mailhog.local');
await page.click('button#enviar-email');

// Consulta o mock SMTP via API (MailHog REST exemplo)
const apiRequest = await request.newContext({ baseURL: 'http://localhost:8025/api/v2' });
const resp = await apiRequest.get('/messages');
const { items } = await resp.json();
const email = items.find(msg => msg.Content.Headers.Subject[0].includes('Recuperação de Senha'));

// Extrai link/token do e-mail
const body = email.Content.Body;
const tokenMatch = body.match(/token=([a-zA-Z0-9]+)/);
const resetToken = tokenMatch[1];

// Usa o token para resetar a senha
await page.goto(`https://sistema.com/resetar-senha?token=${resetToken}`);
await page.fill('input[name="nova_senha"]', 'SenhaSuperNova123');
await page.click('button#salvar');
await expect(page.locator('.alert')).toContainText('Senha redefinida');
```

---

### 🔟 **Validação Visual por Screenshot Diferencial (Snapshot Diff)**

**Contexto:**
Depois de múltiplas ações, precisa garantir que o resultado visual bate pixel a pixel com o esperado (ex: gráficos, tabelas, documentos renderizados).

**Desafios:**

* Gerar prints e comparar com baseline
* Automatizar aprovação ou rejeição em CI/CD

```js
await page.goto('https://sistema.com/dashboard-grafico');
await page.click('button#gerar-grafico');
await page.waitForSelector('canvas.chart-draw', { state: 'visible' });

// Tira print da área relevante
await page.screenshot({ path: 'grafico-atual.png', clip: { x: 100, y: 200, width: 600, height: 300 } });

// Usa expect do Playwright para comparar com baseline salvo (ex: grafico-baseline.png)
await expect(page).toHaveScreenshot('grafico-baseline.png', { threshold: 0.01 }); // 1% tolerância
```

> **Dica:** Integre com plugins de visual regression (Percy, Chromatic, Playwright snapshot).
> Sempre isole a área relevante para evitar falsos positivos por layout.

---

### 1️⃣1️⃣ **Interceptação e Mock de API Dinâmica com Resposta Personalizada**

**Contexto:**
Precisa simular respostas diferentes da API (erros, delays, dados específicos) para validar fluxos críticos de tratamento de erro ou loading, sem depender do backend real.

**Desafios:**

* Interceptar requests e injetar respostas customizadas em tempo real

```js
await page.route('**/api/financeiro/detalhes', async (route, request) => {
  // Resposta mock de erro 500
  await route.fulfill({
    status: 500,
    contentType: 'application/json',
    body: JSON.stringify({ error: 'Erro interno simulado para teste!' }),
  });
});

// Ação que dispara a chamada de API
await page.goto('https://sistema.com/financeiro');
await page.click('button#carregar-detalhes');
await expect(page.locator('.alert')).toContainText('Erro interno simulado para teste!');
```

---

### 1️⃣2️⃣ **Testes Multiusuário Sincronizados (Workflow a Quatro Mãos)**

**Contexto:**
Dois usuários diferentes interagem com o sistema, dependendo de ações um do outro (ex: aprovação/rejeição em fluxo de autorização).

**Desafios:**

* Gerenciar múltiplos contextos em paralelo e sincronizar ações

```js
// Contexto do usuário requisitante
const userA = await browser.newContext();
const pageA = await userA.newPage();
await pageA.goto('https://sistema.com/login');
await pageA.fill('input[name="user"]', 'funcionarioX');
await pageA.fill('input[name="password"]', 'senhaA');
await pageA.click('button[type="submit"]');
await pageA.click('button#solicitar-aprovacao');

// Contexto do aprovador
const userB = await browser.newContext();
const pageB = await userB.newPage();
await pageB.goto('https://sistema.com/login');
await pageB.fill('input[name="user"]', 'aprovadorY');
await pageB.fill('input[name="password"]', 'senhaB');
await pageB.click('button[type="submit"]');
await pageB.click('a[href="/aprovacoes"]');
await pageB.click('button#aprovar-solicitacao-X');

// User A checa status após aprovação
await pageA.reload();
await expect(pageA.locator('.status')).toContainText('Aprovado');
await userA.close();
await userB.close();
```

---
