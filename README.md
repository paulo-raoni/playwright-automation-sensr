
---

# 📚 **README – Playwright Automation - BR DEV**

---

## 🚀 **Propósito do Repositório**

Este repositório centraliza toda a estratégia, documentação e os fluxos de automação E2E com Playwright, padronizando o trabalho de QAs, Devs e líderes técnicos.
O objetivo é garantir rastreabilidade, velocidade, aprendizado e **zero bagunça** — mesmo à medida que o time e o projeto crescem.

---

## 📖 Sumário

* [🗂️ Visão Macro da Estrutura](#visao-macro-da-estrutura)
* [📦 Onde Encontrar Cada Coisa](#onde-encontrar-cada-coisa)
* [⚡ Disclaimer e Princípios](#disclaimer-e-principios)
* [🔎 Como Navegar por Aqui](#como-navegar-por-aqui)
* [🗺️ Estrutura do Repositório (Visual)](#estrutura-do-repositorio-visual)
* [🟢 Guia Rápido: Primeiro Uso](#guia-rapido-primeiro-uso)
* [🛠️ Instalação e Teste do Playwright](#instalacao-e-teste-do-playwright)
* [🌐 Mock Server Local para Testes](#mock-server-local-para-testes)
* [🔗 Referências Importantes](#referencias-importantes)
* [🎯 Próximos Passos](#proximos-passos)
* [👀 Diagrama Rápido — Macrofluxo do Ciclo](#diagrama-rapido--macrofluxo-do-ciclo)




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
 │         │     └─ loginHelper.js
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

### 📦 **Onde Encontrar Cada Coisa**

| Caminho                                              | Descrição/Utilidade                                                | Exemplo/Link                                                |
| ---------------------------------------------------- | ------------------------------------------------------------------ | ----------------------------------------------------------- |
| `fluxos_de_trabalho/Fluxo_QA.md`                     | Guia completo para QA: gravação, template, nomeação, envio         | [Ver](./fluxos_de_trabalho/Fluxo_QA.md)                     |
| `fluxos_de_trabalho/Fluxo_de_Desenvolvimento_E2E.md` | Guia do Dev: automação, refino, asserts, prints, dashboard         | [Ver](./fluxos_de_trabalho/Fluxo_de_Desenvolvimento_E2E.md) |
| `fluxos_de_trabalho/Fluxos_Avancados.md`             | Casos especiais: 2FA, upload, mocks, debugging, troubleshooting    | [Ver](./fluxos_de_trabalho/Fluxos_Avancados.md)             |
| `fluxos_de_trabalho/Exemplos.md`                     | Pastebin: exemplos reais de scripts, trechos prontos               | [Ver](./fluxos_de_trabalho/Exemplos.md)                     |
| `tests/e2e/manual-flows/`                            | Scripts gravados e refinados via Playwright                        | Ex: `login-basico.spec.ts`                                  |
| `tests/e2e/helpers/`                                 | Funções utilitárias: login customizado, helpers técnicos           | Ex: `loginHelper.ts`                                        |
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

## 🌐 Mock Server Local para Testes


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
╔══════════════════════════════════════════╗
║    QA grava -> Dev adapta -> Fluxo      ║
║    documentado -> Dashboard atualizado  ║
║         ↓                ↓              ║
║    Exemplos reais     Docs avançados    ║
╚══════════════════════════════════════════╝
```

---

**Este README está em constante evolução. Contribuições e feedbacks são bem-vindos!**

---
