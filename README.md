
---

# 📚 **README – playwright-automation-brdev**

---

## 🚀 **Propósito do Repositório**

Este repositório centraliza toda a estratégia, documentação e os fluxos de automação E2E com Playwright, padronizando o trabalho de QAs, Devs e líderes técnicos.
O objetivo é garantir rastreabilidade, velocidade, aprendizado e **zero bagunça** — mesmo à medida que o time e o projeto crescem.

---

## 📖 Sumário

* [🗂️ Visão Macro da Estrutura](#visão-macro-da-estrutura)
* [📍 Onde Encontrar Cada Coisa](#onde-encontrar-cada-coisa)
* [⚡ Disclaimer e Princípios](#disclaimer-e-princípios)
* [🔎 Como Navegar por Aqui](#como-navegar-por-aqui)
* [🗺️ Estrutura do Repositório (Visual)](#estrutura-do-repositório-visual)
* [🟢 Guia Rápido: Primeiro Uso](#guia-rápido-primeiro-uso)
* [🛠️ Instalação e Configuração do Ambiente](#instalação-e-configuração-do-ambiente)
* [📦 Scripts Disponíveis (`package.json`)](#scripts-disponíveis-packagejson)
* [🧿 Execução Visual e Debug Manual ✨](#execução-visual-e-debug-manual)
* [🧬 Fluxo Detalhado dos Scripts E2E](#fluxo-detalhado-dos-scripts-e2e)
* [🧱 Mock Server Local para Testes](#mock-server-local-para-testes)
* [🔗 Referências Importantes](#referências-importantes)
* [🎯 Próximos Passos](#próximos-passos)
* [👀 Diagrama Rápido — Macrofluxo do Ciclo](#diagrama-rápido--macrofluxo-do-ciclo)




---

## 🗂️ **Visão Macro da Estrutura**
```plaintext
📁 PLAYWRIGHT-AUTOMATION-BRDEV/
 ├─ 📖 README.md
 │      # Sumário do repo, objetivos, links rápidos, disclaimers, referência cruzada
 ├─ 📂 fluxos_de_trabalho/
 │    ├─ 🧑‍💼 Fluxo_QA.md
 │    │     # Guia mastigado para QA: gravar, nomear, template, entregar
 │    ├─ 💻 Fluxo_de_Desenvolvimento_E2E.md
 │    │     # Guia do Dev: adaptar scripts, padrões técnicos, boas práticas
 │    ├─ 🛠️ Fluxos_Avancados.md
 │    │     # Casos reais: debugging, 2FA, mocks, CI/CD, troubleshooting
 │    └─ 📄 Exemplos.md
 │          # Pastebin: exemplos reais de scripts e massas de dados
 ├─ 🚀 onboarding/
 │    └─ 👁️ Onboarding_Visual.md
 │          # Fluxograma visual, imagens, resumo de onboarding
 ├─ 🧪 tests/
 │    └─ e2e/
 │         ├─ 📝 manual-flows/
 │         │     ├─ login-basico.spec.ts
 │         │     ├─ criar-ticket.spec.ts
 │         │     └─ ...
 │         ├─ 🧩 helpers/
 │         │     └─ loginManual.js
 │         └─ 📦 massa_dados/
 │               └─ usuarios_teste.json
 ├─ 📊 dashboard/
 │    └─ DASHBOARD.md
 │          # Status de execuções, responsáveis, rastreio, datas
 ├─ 🖼️ docs/
 │    └─ imagens/
 │          # Prints, diagramas, UML, fluxogramas
 └─ ⚙️ .github/
      ├─ ISSUE_TEMPLATE/
      │     ├─ fluxo_qa.yml
      │     ├─ fluxo_dev.yml
      └─ workflows/
           └─ playwright-ci.yml
```

---

### 📍 **Onde Encontrar Cada Coisa**

| Caminho                                              | Descrição/Utilidade                                                | Exemplo/Link                                                |
| ---------------------------------------------------- | ------------------------------------------------------------------ | ----------------------------------------------------------- |
| `fluxos_de_trabalho/Fluxo_QA.md`                     | Guia completo para QA: gravação, template, nomeação, envio         | [Ver](./fluxos_de_trabalho/Fluxo_QA.md)                     |
| `fluxos_de_trabalho/Fluxo_de_Desenvolvimento_E2E.md` | Guia do Dev: automação, refino, asserts, prints, dashboard         | [Ver](./fluxos_de_trabalho/Fluxo_de_Desenvolvimento_E2E.md) |
| `fluxos_de_trabalho/Fluxos_Avancados.md`             | Casos especiais: 2FA, upload, mocks, debugging, troubleshooting    | [Ver](./fluxos_de_trabalho/Fluxos_Avancados.md)             |
| `fluxos_de_trabalho/Exemplos.md`                     | Pastebin: exemplos reais de scripts, trechos prontos               | [Ver](./fluxos_de_trabalho/Exemplos.md)                     |
| `tests/e2e/manual-flows/`                            | Scripts gravados e refinados via Playwright                        | Ex: `login-basico.spec.js`                                  |
| `tests/e2e/helpers/`                                 | Funções utilitárias: login customizado, helpers técnicos           | Ex: `loginManual.js`                                        |
| `tests/e2e/massa_dados/`                             | Dados para teste: usuários, tickets, fixtures em JSON              | Ex: `usuarios_teste.json`                                   |
| `dashboard/DASHBOARD.md`                             | Tabela de status dos fluxos, datas, responsáveis, rastreio         | [Ver](./dashboard/DASHBOARD.md)                             |
| `onboarding/Onboarding_Visual.md`                    | Tutorial visual: primeiro uso, fluxo do zero, checklist onboarding | [Ver](./onboarding/Onboarding_Visual.md)                    |
| `docs/imagens/`                                      | Imagens, diagramas, prints, UML para documentação ou issues        | Ex: PNG, SVG                                                |

> Consulte esta tabela sempre que precisar saber **onde encontrar, criar ou revisar** qualquer artefato real do projeto.

---

## ⚡ **Disclaimer e Princípios**

> ### ⚠️ **DISCIPLINA E ORGANIZAÇÃO = AGILIDADE E SEGURANÇA**
>
> * Não grave fluxos misturados nem pule etapas de documentação.
> * Sempre siga os templates e padrões.
> * Qualquer dúvida: consulte a documentação do seu papel, ou abra uma *issue*.
> * Fluxos que fogem ao padrão **não entram no pipeline!**
> * O repositório é vivo: contribua, revise, questione.

---

## 🔎 **Como Navegar por Aqui**

* **QA (Testador Manual):**
  Vá para [`fluxos_de_trabalho/Fluxo_QA.md`](./fluxos_de_trabalho/Fluxo_QA.md) para saber como gravar, nomear e entregar fluxos.
* **Dev (Automação E2E):**
  Consulte [`fluxos_de_trabalho/Fluxo_de_Desenvolvimento_E2E.md`](./fluxos_de_trabalho/Fluxo_de_Desenvolvimento_E2E.md) para saber como adaptar scripts, padrões técnicos e troubleshooting.
* **Busca por Exemplos Reais:**
  Veja [`fluxos_de_trabalho/Exemplos.md`](./fluxos_de_trabalho/Exemplos.md)
* **Dúvidas Avançadas / Problemas:**
  Use [`fluxos_de_trabalho/Fluxos_Avancados.md`](./fluxos_de_trabalho/Fluxos_Avancados.md)
* **Onboarding ou apresentação rápida:**
  [`onboarding/Onboarding_Visual.md`](./onboarding/Onboarding_Visual.md)
* **Status e rastreio:**
  [`dashboard/DASHBOARD.md`](./dashboard/DASHBOARD.md)

---

## 🗺️ **Estrutura do Repositório (Visual)**

```ascii
[ README.md ] —> Guia, sumário e filosofia
     |
     +--> fluxos_de_trabalho/
     |        ├─ Fluxo_QA.md (Só para QA)
     |        ├─ Fluxo_de_Desenvolvimento_E2E.md (Só Dev)
     |        ├─ Fluxos_Avancados.md (Debug, CI/CD, mocks...)
     |        └─ Exemplos.md (Pastebin de scripts)
     |
     +--> onboarding/ (Visual, onboarding rápido)
     |
     +--> tests/e2e/
     |        ├─ manual-flows/ (Scripts gerados)
     |        ├─ helpers/ (Utils de automação)
     |        └─ massa_dados/ (Dados, fixtures)
     |
     +--> dashboard/ (Status e rastreio de fluxos)
     +--> docs/imagens/ (Diagramas, prints, UML)
     +--> .github/ (Issues e workflows)
```

---

## 🟢 **Guia Rápido: Primeiro Uso**

1. **QA grava o fluxo via Playwright Codegen**
   [Veja como fazer 👉 Fluxo\_QA.md](./fluxos_de_trabalho/Fluxo_QA.md)
2. **Dev adapta, refina e automatiza o script**
   [Passo a passo 👉 Fluxo\_de\_Desenvolvimento\_E2E.md](./fluxos_de_trabalho/Fluxo_de_Desenvolvimento_E2E.md)
3. **Exemplo prático de cada fluxo:**
   [Exemplos.md](./fluxos_de_trabalho/Exemplos.md)
4. **Problemas avançados?**
   [Soluções e dicas 👉 Fluxos\_Avancados.md](./fluxos_de_trabalho/Fluxos_Avancados.md)
5. **Ver status dos testes/documentação:**
   [DASHBOARD.md](./dashboard/DASHBOARD.md)

6. **Quer inspecionar um fluxo logado ou pegar seletores reais?**
   Rode:
   ```bash
   npm run codegen:auth
   ```

-----

## 🛠️ **Instalação e Configuração do Ambiente**

Esta seção é o guia definitivo para configurar seu ambiente de desenvolvimento do zero.

### **Pré-requisitos**

1.  **Git:** Essencial para clonar o repositório.

2.  **Node.js:** A base para executar o Playwright e seus scripts.

      * **Método Recomendado: `nvm` (Node Version Manager)**
        O `nvm` é a forma mais robusta de instalar o Node.js, pois evita problemas de permissão e permite gerenciar múltiplas versões facilmente.

          * **Instalação do `nvm`:** Siga as instruções no [repositório oficial do nvm](https://www.google.com/search?q=https://github.com/nvm-sh/nvm%23installing-and-updating).
          * **Instalação do Node.js:** `nvm install --lts`

      * **Método Alternativo: Instalador Oficial**
        Você pode baixar o Node.js diretamente do [site oficial](https://nodejs.org/). Esteja ciente de que, dependendo do seu sistema, pode ser necessário usar `sudo` para instalar pacotes globais, o que não é ideal.

### **Passo 1: Clonar e Instalar Dependências do Projeto**

Execute estes comandos no seu terminal.

```bash
# 1. Clone o repositório para a sua máquina
git clone https://github.com/paulo-raoni/playwright-automation-brdev

# 2. Entre na pasta do projeto
cd playwright-automation-brdev

# 3. Instale todas as dependências listadas no package.json
npm install
```

### **Passo 2: Instalar os Navegadores do Playwright**

Este comando baixa as versões dos navegadores (Chromium, Firefox, WebKit) gerenciadas pelo Playwright.

```bash
npx playwright install
```

### **Passo 3: Instalar Dependências do Sistema Operacional (Linux)**

Para que os navegadores possam rodar em modo *headless* (sem interface gráfica), eles precisam de bibliotecas adicionais do sistema.

```bash
# Este comando analisa seu SO e instala as dependências necessárias
sudo npx playwright install-deps
```

> 🚨 **Solução para Ambientes Linux Restritivos**
>
> Se você usou o `nvm` e o comando acima falhou com o erro `sudo: npx: comando não encontrado`, isso ocorre porque seu sistema tem uma política de `sudo` restritiva.
>
> **A solução é uma configuração única no seu ambiente.** Execute os dois comandos abaixo para criar "atalhos" (links simbólicos) em um local que o `sudo` reconhece:
>
> ```bash
> sudo ln -s "$(which node)" /usr/local/bin/node
> ```
>
> ```bash
> sudo ln -s "$(which npx)" /usr/local/bin/npx
> ```
>
> Após executar esses dois comandos, tente o `sudo npx playwright install-deps` novamente.

### **Passo 4: Verificação Final**

Para garantir que toda a configuração está correta, execute a suíte de testes:

```bash
npx playwright test
```

Se os testes rodarem sem erros de ambiente, sua configuração está pronta.

> Dica: sempre execute os comandos na pasta onde está o `package.json` do projeto\!

-----


## 📦 Scripts Disponíveis (`package.json`)

Estes são os principais scripts disponíveis para automação, debug e manutenção do ambiente Playwright.

```md
| Comando                       | Descrição                                                                 |
|------------------------------|---------------------------------------------------------------------------|
| `npm run pw:install-deps`    | Instala dependências de sistema para rodar browsers no Linux             |
| `npm run test:e2e`           | Roda toda a suíte E2E com login automático (`auth.json`)                 |
| `npm run test:single`        | Roda apenas um teste por vez (útil para debugging)                       |
| `npm run login:setup`        | Executa apenas o login e salva `auth.json`                               |
| `npm run codegen:auth`       | Abre o navegador logado, pronto para inspeção/gravação de seletores      |
| `npm run report`             | Abre o relatório gerado após uma suíte de testes                         |
| `npm run mock`               | Inicia o servidor de mock local para testes offline                      |
```
> ⚠️ Os testes usam um validador automático que verifica se `auth.json` está válido.  
> Caso contrário, o login é feito automaticamente antes da execução.

> ℹ️ Veja como cada script é usado em contexto prático na seção [🟢 Guia Rápido: Primeiro Uso](#guia-rapido-primeiro-uso)


---


## 🧬 Fluxo Detalhado dos Scripts E2E

Abaixo, você encontra **o que cada script realmente faz**, **quando usar**, e **quais arquivos são envolvidos**.  
Use essa seção como referência prática para manter os testes rápidos, confiáveis e sem surpresas.

> 💡 Dica: scripts com `auth.json` usam sessão armazenada.  
> O único teste que ignora isso de propósito é `login-basico.spec.js` — veja destaque no final.

---

### ✅ Scripts Essenciais do Dia a Dia

| Script                  | Tipo        | Quando usar                                                                                                      |
|------------------------|--------------|------------------------------------------------------------------------------------------------------------------|
| `test:e2e`             | ✅ Essencial | Rodar toda a suíte de testes com login automático via `auth.json`                                                |
| `login:setup`          | ✅ Essencial | Forçar novo login e gerar novo `auth.json` via browser real                                                      |
| `report`               | ✅ Essencial | Visualizar o relatório gerado após a execução                                                                    |
| `test:single`          | 🟡 Útil      | Rodar um único teste de forma isolada (debug, flaky tests)                                                       |
| `check:auth`           | ✅ Interno   | Verifica se `auth.json` ainda é válido. Se falhar, executa `global.setup.js` para gerar um novo automaticamente. |

       

---

### 👨‍🔬 Scripts Auxiliares (dev ou debugging)

| Script           | Tipo        | Finalidade                                                  |
|------------------|-------------|-------------------------------------------------------------|
| `codegen:auth`   | ⚠️ Dev Only | Roda um teste com `auth.json` e pausa para inspeção manual  |
| `codegen:record` | ⚠️ Dev Only | Abre interface interativa com login já feito                |
| `mock`           | 🧪 Auxiliar | Sobe servidor local simulado (para testes offline)          |

> 🛠️ O script [`codegen.login.spec.js`](./dev-tools/codegen.login.spec.js) serve como ponto de entrada para inspeção manual com login feito via `auth.json`. Ele pausa a execução logo após o carregamento da página logada.

---

### 🧭 Fluxos de Execução com ASCII

---

#### 🟢 `npm run login:setup`

```text
╭────────────────────────────────────╮
│         login:setup script         │
╰────────────────────────────────────╯
              │
              ▼
🧠 Carrega .env manualmente (user/pass/baseURL)
              │
              ▼
🔐 Faz login via UI real (DOM + selectors)
              │
              ▼
🔍 Valida presença do heading "Minha Experiência"
              │
              ▼
💾 Salva storageState em:
   → 📄 playwright/.auth/auth.json
              │
              ▼
✅ Exibe logs com estado e URL confirmada
```

---

#### 🔐 `npm test` (com pretest automático)

```text
╭────────────────────────────╮
│        npm test            │
╰────────────────────────────╯
        │
        ▼
📦 Executa: scripts/check-auth-storage.js
        │
        ├── Se auth.json existe:
        │     ├─ Cria contexto com storage
        │     ├─ Acessa /dash
        │     └─ Valida heading / URL
        │           └── ✅ Sessão OK → segue com testes
        │
        └── Se auth.json não existe ou inválido:
              └── 🔁 Executa global.setup.js (força novo login)
                             │
                             └── 💾 Novo auth.json salvo

        ▼
▶️ Executa testes Playwright com:
   use.storageState = playwright/.auth/auth.json
```

---

#### 🎬 `npm run codegen:auth`

```text
╭────────────────────────────────────╮
│         codegen:auth script        │
╰────────────────────────────────────╯
              │
              ▼
▶️ Executa teste: codegen.login.spec.js
              │
              ├── Usa: auth.json
              └── Pausa via page.pause()
                        │
                        └── 🧪 Abre devtools interativo
```

---

#### 🧪 `npm run test:e2e`

```text
╭────────────────────────────────────╮
│           test:e2e script          │
╰────────────────────────────────────╯
              │
              ▼
▶️ Executa todos os testes em:
   tests/e2e/
              │
              ├── Usa: playwright/.auth/auth.json
              ├── Executa testes com storageState
              └── Gera logs, falhas, reports

📝 Relatórios gerados em:
  → playwright-report/
🧾 Debugs salvos em:
  → debug/{slug}/
```

---

#### 🔁 `npm run test:single`

```text
╭────────────────────────────────────╮
│          test:single script        │
╰────────────────────────────────────╯
              │
              ▼
▶️ Executa um único teste (modo 1 worker)
              │
              ├── Usa: auth.json
              └── Ideal para testes flakey ou debug pontual
```

---

#### 🧪 `npm run codegen:record`

```text
╭────────────────────────────────────╮
│         codegen:record script      │
╰────────────────────────────────────╯
              │
              ▼
🎬 Abre Playwright Codegen UI
              │
              ├── Carrega auth.json como storage
              └── Inicia no /dash
```

---

#### 📊 `npm run report`

```text
╭────────────────────────────────────╮
│           report script            │
╰────────────────────────────────────╯
              │
              ▼
📂 Abre: playwright-report/index.html
```

---

### ⚠️ Observação Importante: teste que ignora `auth.json`

> 🔐 **Importante para integridade dos testes**
> O arquivo [`login-basico.spec.js`](./tests/e2e/manual-flows/login-basico.spec.js) **é o único que ignora deliberadamente o `auth.json`**.
> Isso é necessário para validar o login manual via UI — e ele **nunca deve herdar uma sessão logada**.
>
> Ele inclui no topo:
>
> ```js
> test.use({ storageState: undefined });
> ```
>
> E **usa as credenciais diretamente do `.env`**, e não da massa `usuarios_teste.json`:
>
> ```js
> const usuario = process.env.PLAYWRIGHT_USER;
> const senha = process.env.PLAYWRIGHT_PASS;
> ```


---

## 🧿 **Execução Visual e Debug Manual ✨**

> ⚠️ **NOVO BLOCO ADICIONADO** — Use essas opções quando quiser ver o que está acontecendo — ideal para ajustes de fluxo, investigação de falhas ou seleção de elementos mais confiável.

### ▶️ Rodar com navegador visível (modo headed)

```bash
npx playwright test --headed
```

🔍 Útil para ver o fluxo completo do teste em tempo real.

### 🐒 Rodar devagar com `slowMo`

```bash
npx playwright test --headed --slow-mo=500
```

🛌 Adiciona delay entre ações. Ideal para inspeção visual mais lenta.

### 🛠️ Debug interativo com `page.pause()`

1. Adicione manualmente no seu teste ou helper:

```js
await page.pause();
```

2. Rode com:

```bash
npx playwright test --headed
```

🔪 Isso abrirá o browser no ponto de pausa e permitirá inspecionar via DevTools.

### ⚠️ Teste que ignora `auth.json`

> O teste [`login-basico.spec.js`](./tests/e2e/manual-flows/login-basico.spec.js) **não usa `auth.json` de propósito**. Ele simula um login real via UI.
>
> Ele define explicitamente:
>
> ```js
> test.use({ storageState: undefined });
> ```
>
> Para rodá-lo com visualização e delay:
>
> ```bash
> npx playwright test tests/e2e/manual-flows/login-basico.spec.js --headed --slow-mo=300
> ```

---


## 🧱 Mock Server Local para Testes


╭─────────────╮         ╭───────────────╮        ╭─────────────╮
│ Test Runner │──HTTP──▶│ Mock Server   │──▶HTML▶│ Navegador   │
╰─────────────╯         ╰───────────────╯        ╰─────────────╯
        ▲                    │ /login, /dashboard    ▲
        └────────────────────────────────────────────┘

Quer rodar o Playwright sem depender de ambiente real ou backend de terceiros?  
Use o **Mock Server Local** (Node.js/Express) incluído no repo para simular login e dashboard!

**Como usar:**

1. Instale as dependências (se necessário):

    ```bash
    npm install express
    ```

2. Crie um arquivo chamado `mock-server.js` no root do projeto com o conteúdo:

    ```js
    const express = require('express');
    const app = express();
    app.use(express.json());

    app.post('/login', (req, res) => {
      // Aceita qualquer usuário/senha (mock!)
      res.status(200).json({ success: true, redirect: '/dashboard' });
    });

    app.get('/dashboard', (req, res) => {
      res.send('<h1>Dashboard mock – está logado!</h1>');
    });

    app.listen(3000, () => {
      console.log('Mock server rodando em http://localhost:3000');
    });
    ```

3. **Rode o mock server:**

    ```bash
    node mock-server.js
    ```

4. **Altere as URLs dos seus testes** para usar `http://localhost:3000/login` e `/dashboard`.

5. Execute os testes normalmente!

> Esse mock server serve só para testes rápidos de fluxo.  
> Para mais rotas ou lógicas, adicione direto no `mock-server.js` conforme precisar.

---


## 🔗 **Referências Importantes**

* [Documentação Oficial Playwright](https://playwright.dev/docs/codegen)
* [Guia de Boas Práticas para Automatização](./fluxos_de_trabalho/Fluxo_de_Desenvolvimento_E2E.md)
* [Material Visual para Onboarding](./onboarding/Onboarding_Visual.md)

---

## 🎯 **Próximos Passos**

* [ ] Sempre confira os templates antes de começar um novo fluxo.
* [ ] Contribua com novos exemplos reais para a pasta `Exemplos.md`.
* [ ] Reporte problemas ou dúvidas usando o template de issue do GitHub.
* [ ] Consulte os docs avançados para resolver casos complexos (autenticação, CI/CD, debugging).
* [ ] Consulte também [TODO.md](./TODO.md) para ver melhorias e roadmap sugeridos.


---

## 👀 **Diagrama Rápido — Macrofluxo do Ciclo**

```ascii
╭────────────╮        ╭─────────────────╮       ╭──────────────╮
│   QA grava ├──▶     |Dev adapta script├──▶    |Teste validado├─┐
╰────────────╯        ╰─────────────────╯       ╰──────────────╯ │
          │                        │                             │
          ▼                        ▼                             ▼
    Pastebin de exemplos     Fluxo de Dev & QA          Dashboard atualizado
    (Exemplos.md)           (documentação técnica)       (status, responsáveis)

```

---

**Este README está em constante evolução. Contribuições e feedbacks são bem-vindos!**

---
