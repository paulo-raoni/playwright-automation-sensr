
# 🚀 **Onboarding Visual – Playwright Automation SNSR**

---

## 🎯 **Bem-vindo! Por onde começar**

Começou agora no projeto? Respira, relaxa e segue o roteiro.  
Este onboarding te aponta os arquivos e pastas essenciais, explica para que serve cada coisa, e ainda mostra como rodar o Playwright na prática.

---

## 🗂️ O que tem em cada pasta? (Versão 2024)

| Caminho/Arquivo                          | Para que serve?                                                            |
| ---------------------------------------- | -------------------------------------------------------------------------- |
| 📖 `README.md`                           | Porta de entrada, visão macro, referências e sumário do repo               |
| 📂 `fluxos_de_trabalho/`                 | Guias para QA, Dev, troubleshooting, exemplos                              |
| ├─ 🧑‍💼 `Fluxo_QA.md`                    | Guia mastigado para QA: gravar, nomear, template, entregar                 |
| ├─ 💻 `Fluxo_de_Desenvolvimento_E2E.md`   | Guia do Dev: adaptar scripts, padrões técnicos, boas práticas              |
| ├─ 🛠️ `Fluxos_Avancados.md`              | Casos reais: debugging, 2FA, mocks, CI/CD, troubleshooting                 |
| └─ 📄 `Exemplos.md`                      | Pastebin: exemplos reais de scripts e massas de dados                      |
| 🚀 `onboarding/Onboarding_Visual.md`      | Este onboarding visual e tutorial inicial                                  |
| 🧪 `tests/e2e/manual-flows/`              | Scripts gravados/refinados de fluxos reais                                 |
| 🧩 `tests/e2e/helpers/`                   | Funções técnicas/utilitários usados em vários testes                       |
| 📦 `tests/e2e/massa_dados/`               | Dados de teste, usuários, fixtures em JSON                                 |
| 📊 `dashboard/DASHBOARD.md`               | Status de execução, histórico, links de revisão                            |
| 🖼️ `docs/imagens/`                       | Imagens, prints, diagramas, UML para docs/issues                           |
| ⚙️ `.github/ISSUE_TEMPLATE/`              | Templates para issues de QA/Dev                                            |
| ⚙️ `.github/workflows/`                   | Automação CI/CD do Playwright                                              |

> Consulte sempre o [README.md](../README.md) para ver a estrutura completa e mais dicas rápidas.

---

## 🛠️ **Instalação e Teste do Playwright**

> **Pré-requisito:** Node.js 18+ instalado ([download aqui](https://nodejs.org/))

**1. Instale o Playwright no projeto:**

```bash
npm install --save-dev playwright
````

**2. Instale os navegadores suportados:**

```bash
npx playwright install
```

**3. Teste se está tudo funcionando:**

```bash
npx playwright codegen --help
```

**4. Rode um teste exemplo (se houver):**

```bash
npx playwright test tests/e2e/manual-flows/login-basico.spec.ts
```

> Dica: sempre execute os comandos na pasta onde está o `package.json` do projeto!

---

## 🖥️ **Fluxo Visual – Do Zero ao Teste**

```ascii
╭───────────────╮
│ Clonar repo  │
╰──────┬────────╯
       v
╭───────────────╮
│ Instalar dep. │
╰──────┬────────╯
       v
╭───────────────╮
│ Instalar PW   │
╰──────┬────────╯
       v
╭───────────────╮
│ Rodar comando │
│ de teste      │
╰──────┬────────╯
       v
╭───────────────╮
│ Consultar docs│
│ (QA ou Dev)   │
╰───────────────╯
```

---

## 🤝 Dicas para Quem Está Chegando

* 🕵️ **QA:** [Guia de Fluxo](../fluxos_de_trabalho/Fluxo_QA.md)
* 💻 **Dev:** [Fluxo de Automação](../fluxos_de_trabalho/Fluxo_de_Desenvolvimento_E2E.md)
* 🧩 **Scripts de exemplo:** [`tests/e2e/manual-flows/`](../tests/e2e/manual-flows/)
* 🔧 **Helpers técnicos:** [`tests/e2e/helpers/`](../tests/e2e/helpers/)
* 📦 **Massa de dados:** [`tests/e2e/massa_dados/`](../tests/e2e/massa_dados/)
* 📊 **Dashboard:** [DASHBOARD.md](../dashboard/DASHBOARD.md)
* 📷 **Imagens/diagramas:** [`docs/imagens/`](../docs/imagens/)

---

## 📝 Checklist para Onboarding

* [ ] ⚡ Instalou Node.js e Playwright?
* [ ] 🏁 Conseguiu rodar um comando Playwright sem erro?
* [ ] 🗺️ Já sabe onde ficam os docs principais?
* [ ] 📊 Viu o dashboard de status dos fluxos?
* [ ] 🎬 Conseguiu rodar ou gravar um fluxo simples?
* [ ] 🗂️ Entendeu a utilidade das principais pastas e arquivos?
* [ ] 🔍 Já localizou scripts de exemplo, helpers e massas de dados?

---

**FIM DO ONBOARDING VISUAL**

---