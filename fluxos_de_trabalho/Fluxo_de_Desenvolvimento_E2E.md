
---

# 🤖 Guia: Da Gravação Manual à Automação Real de Testes Playwright

---

## 🎯 Objetivo

Este documento descreve como transformar fluxos gravados e documentados manualmente em **testes E2E automatizados, auditáveis e de fácil manutenção** usando o Playwright. O objetivo é garantir que todos os fluxos críticos estejam protegidos por testes reprodutíveis, claros e integrados ao processo do projeto.

---

## 1️⃣ **Ciclo de Automação – Visão Geral**

```ascii
╭────────────────────────────╮
│ Receber scripts gravados   │
╰────────────┬───────────────╯
             v
╭────────────────────────────╮
│ Organizar arquivos         │
╰────────────┬───────────────╯
             v
╭────────────────────────────╮
│ Analisar e revisar script  │
╰────────────┬───────────────╯
             v
╭────────────────────────────╮
│ Adaptar e automatizar      │
╰────────────┬───────────────╯
             v
╭────────────────────────────╮
│ Executar e validar         │
╰────────────┬───────────────╯
             v
╭────────────────────────────╮
│ Atualizar documentação     │
╰────────────┬───────────────╯
             v
╭────────────────────────────╮
│ Acompanhar no dashboard    │
╰────────────────────────────╯
```

---

## 2️⃣ **Organização dos Arquivos**

* **Scripts gerados**: salvar na pasta
  `/tests/e2e/manual-flows/`
* **Documentação dos fluxos**: salvar como `.md`
  `/tests/e2e/manual-flows/fluxo-nome.md`
* **Dashboard central**: manter arquivo `DASHBOARD.md` ou planilha compartilhada.
* **Padrão de nomenclatura recomendado:**

  * Scripts: `login-basico.spec.ts`
  * Documentação: `login-basico.md`

---

## 3️⃣ **Checklist – Antes de Automatizar**

* [ ] O script representa exatamente o fluxo documentado?
* [ ] Não há etapas supérfluas ou cliques irrelevantes?
* [ ] O fluxo foi revisado pela QA e está aprovado no dashboard?
* [ ] O arquivo `.md` correspondente está completo e atualizado?

---

## 4️⃣ **Adaptação do Script para Teste Automatizado**

### **Fluxo do Processo Técnico**

```ascii
╭────────────────────────────╮
│ 1. Abrir script no editor  │
╰────────────┬───────────────╯
             v
╭────────────────────────────╮
│ 2. Limpar passos extras    │
╰────────────┬───────────────╯
             v
╭────────────────────────────╮
│ 3. Garantir seletores estáveis │
╰────────────┬───────────────╯
             v
╭────────────────────────────╮
│ 4. Adicionar asserts       │
╰────────────┬───────────────╯
             v
╭────────────────────────────╮
│ 5. Incluir prints ou logs  │
╰────────────┬───────────────╯
             v
╭────────────────────────────╮
│ 6. Rodar teste localmente  │
╰────────────┬───────────────╯
             v
╭────────────────────────────╮
│ 7. Corrigir eventuais falhas│
╰────────────┬───────────────╯
             v
╭────────────────────────────╮
│ 8. Commitar e atualizar dashboard│
╰────────────────────────────╯
```

---

### **Explicação dos Passos**

#### 🗂️ **Abrir o Script no Editor**

Abrir o arquivo `.spec.ts` gerado pelo Playwright no editor de código de preferência (ex: VS Code).

#### 🧹 **Limpar Passos Supérfluos**

Remover etapas não relacionadas ao fluxo principal (ex: cliques em áreas aleatórias, navegação desnecessária, comandos duplicados).

#### 🔒 **Garantir Seletores Estáveis**

Substituir seletores frágeis por identificadores únicos ou data-attributes, sempre que possível, para garantir manutenção futura.

#### ✅ **Adicionar Asserções**

Inserir comandos `expect()` para validar que cada etapa relevante realmente atingiu o objetivo esperado (ex: mudança de URL, exibição de mensagens, atualização de campos).

#### 🖼️ **Incluir Prints/Logs**

Adicionar comandos para tirar screenshots ou gerar logs informativos quando necessário, principalmente em etapas críticas ou de falha.

#### 🧪 **Rodar o Teste Localmente**

Executar o teste com o comando:

```
npx playwright test tests/e2e/manual-flows/login-basico.spec.ts
```

Ajustar tempos de espera, seletores ou lógicas de assert conforme necessário.

#### 🛠️ **Corrigir Eventuais Falhas**

Refinar o script até que rode do início ao fim, validando todos os asserts.

#### 💾 **Commit e Atualização**

Versão final do script deve ser enviada para o controle de versão (ex: Git), e o dashboard/planilha deve ser atualizado com o status "Automatizado" e data de revisão.

---

## 5️⃣ **Exemplo Antes/Depois**

### **Script Gerado (Bruto)**

```js
await page.goto('https://enderecodomeusistema.com/login');
await page.click('input[name="user"]');
await page.fill('input[name="user"]', 'admin');
await page.click('input[name="password"]');
await page.fill('input[name="password"]', 'senha123');
await page.click('button[type="submit"]');
await page.waitForNavigation();
await page.click('div.legal'); // clique desnecessário
await page.waitForTimeout(3000); // espera desnecessária
```

### **Script Automatizado (Refinado)**

```js
await page.goto('https://enderecodomeusistema.com/login');
await page.fill('input[name="user"]', 'admin');
await page.fill('input[name="password"]', 'senha123');
await page.click('button[type="submit"]');
await expect(page).toHaveURL('https://enderecodomeusistema.com/dashboard');
await expect(page.locator('h1')).toContainText('Bem-vindo');
await page.screenshot({ path: 'login-ok.png' });
```

---

## 6️⃣ **Padrão de Teste Playwright – Template Base**

```js
import { test, expect } from '@playwright/test';

test('Fluxo: Login Básico', async ({ page }) => {
  await page.goto('https://enderecodomeusistema.com/login');
  await page.fill('input[name="user"]', 'admin');
  await page.fill('input[name="password"]', 'senha123');
  await page.click('button[type="submit"]');
  await expect(page).toHaveURL('https://enderecodomeusistema.com/dashboard');
  await expect(page.locator('h1')).toContainText('Bem-vindo');
  await page.screenshot({ path: 'login-ok.png' });
});
```

> 🔎 Use sempre descrições claras no nome do teste e nos comentários.

---

## 7️⃣ **Atualização do Dashboard (Visão do Dev)**

Após a automação ou ajuste de um teste, é responsabilidade do dev **atualizar o dashboard** para garantir rastreabilidade e status real dos fluxos.
O dashboard passa a ser uma ferramenta do time técnico (devs, líderes, eventualmente SRE/DevOps) para acompanhamento do ciclo de automação.

### **Fluxo de Atualização**

```ascii
╔═════════════════════════════╗
║   Dev finaliza automação   ║
╚═════════════════════════════╝
        |
[ Atualiza linha do fluxo no DASHBOARD.md ]
        |
[ Preenche status: Automatizado, Em revisão, Bloqueado, etc ]
        |
[ (Opcional) Acrescenta nome do responsável/data ]
```

* Exemplo de linha preenchida:

  | Nome do Fluxo     | Status       | Script               | Última Revisão | Responsável |
  | ----------------- | ------------ | -------------------- | -------------- | ----------- |
  | Login Básico      | Automatizado | login-basico.spec.ts | 2024-07-10     | dev1        |
  | Criação de Ticket | Bloqueado    | criar-ticket.spec.ts | 2024-07-11     | dev2        |

---

## 8️⃣ **Cuidados Importantes**

* Evitar hardcoding de dados sensíveis nos scripts.
* Manter nomes e caminhos padronizados.
* Garantir que o script seja idempotente (pode rodar várias vezes sem “sujar” o ambiente).
* Validar se o teste cobre, de fato, a experiência real do usuário.

---

## 9️⃣ **Fluxos Especiais (Responsabilidade Técnica)**

### 🛑 **Fluxo de Erro em Teste Automatizado**

* Quando o teste automatizado falha por mudança no sistema, o dev:

  1. Analisa se é erro de automação ou do sistema.
  2. Atualiza o dashboard para “Bloqueado” ou “Falha”.
  3. Registra detalhes na documentação `.md` do fluxo.
  4. (Opcional) Notifica QA ou liderança para avaliar necessidade de novo mapeamento/gravação.

### 🔁 **Fluxo de Regravação ou Refatoração**

* Se um fluxo precisa ser regravado (por mudança significativa ou falha recorrente):

  1. Dev (ou QA, se for caso de uso real quebrado) sinaliza no dashboard.
  2. Nova versão do script é criada (`login-basico-v2.spec.ts` ou sobrescrita).
  3. Documentação e dashboard são atualizados pelo dev após ajustes.
  4. Sempre que possível, evitar regravação “às cegas” — analisar motivo do erro antes.

### 🚦 **Onboarding Visual para Novos Devs**

```ascii
╭──────────────────────────────╮
│ 1. Acessar a documentação   │
│ 2. Analisar fluxos no dash  │
│ 3. Adaptar scripts/modelo   │
│ 4. Rodar localmente e validar│
│ 5. Atualizar dash e docs    │
╰──────────────────────────────╯
```

* O onboarding técnico deve focar em padrões de automação, análise crítica de scripts e revisão em par.
* Sempre validar cobertura de asserts, qualidade dos seletores e clareza da documentação.

---

## 📝 **Resumo de Responsabilidades**

* **QA:**

  * Grava e documenta o fluxo, entrega ao dev.
* **Dev:**

  * Refina/adapta o script para automação, insere asserts, valida localmente.
  * Mantém o dashboard atualizado.
  * Trata fluxos de erro/regravação, notifica QA/liderança quando necessário.
  * Garante documentação técnica e melhoria contínua do repositório de testes.

---

## 1️⃣0️⃣ **Resumo Visual – Jornada da Automação**

```ascii
╔════════════════════════════════════════════════════════════╗
║  Receber ➡️ Analisar ➡️ Adaptar ➡️ Validar ➡️ Documentar  ║
║             ➡️ Automatizar ➡️ Atualizar Dashboard        ║
╚════════════════════════════════════════════════════════════╝
```

---

## 📚 **Considerações Finais**

A automação de testes E2E é um ciclo contínuo de melhoria.
Scripts devem ser periodicamente revisados, adaptados e ampliados conforme o sistema evolui.
Documentação e dashboard centralizados garantem transparência, rastreabilidade e onboarding rápido de novos membros no time.

---

Em caso de dúvidas ou pontos de bloqueio, consultar o responsável técnico ou o material de onboarding do projeto.
**Manter sempre o padrão e a clareza para facilitar a vida de todos os envolvidos no processo.**

---
