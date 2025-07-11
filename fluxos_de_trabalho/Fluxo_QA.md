
---

# ⚙️ Automação de Fluxos E2E – Playwright

---

## 📖 Introdução

Este documento padroniza o processo de gravação, documentação e acompanhamento dos fluxos E2E usando Playwright. O objetivo é otimizar testes, garantir rastreabilidade e promover agilidade e segurança para toda a equipe.

---

## 🗂️ Sumário

1. [Visão Geral – Macrofluxo do Processo](#1-visão-geral--macrofluxo-do-processo)
2. [Checklist de Preparação](#2-checklist-de-preparação)
3. [Abertura e Navegação no Terminal](#3-abertura-e-navegação-no-terminal)
4. [Gravação do Fluxo – Passo a Passo](#4-gravação-do-fluxo--passo-a-passo)
      * [4.1 Entendendo a Interface do Codegen]
5. [Salvamento e Nomeação do Script](#5-salvamento-e-nomeação-do-script)
6. [Documentação e Template](#6-documentação-e-template)
7. [Entrega e Revisão Técnica](#7-entrega-e-revisão-técnica)
8. [Dashboard e Acompanhamento](#8-dashboard-e-acompanhamento)
9. [Dúvidas Frequentes – FAQ](#9-dúvidas-frequentes--faq)
10. [Resumo Visual – Jornada Completa](#10-resumo-visual--jornada-completa)
11. [Considerações Finais](#11-considerações-finais)

---

## 1️⃣ Visão Geral – Macrofluxo do Processo

**O processo de automação segue estas etapas:**

```ascii
╭─────────────╮
│ PREPARAÇÃO  │
╰─────┬───────╯
      v
╭─────────────╮
│ GRAVAÇÃO    │
╰─────┬───────╯
      v
╭─────────────╮
│ DOCUMENTAÇÃO│
╰─────┬───────╯
      v
╭─────────────╮
│ REVISÃO     │
╰─────┬───────╯
      v
╭─────────────╮
│ AUTOMATIZAÇÃO│
╰─────────────╯
```

Cada etapa é detalhada nas próximas seções, com orientações específicas e fluxos ilustrativos únicos.

---

## 2️⃣ Checklist de Preparação

Antes de iniciar a gravação de qualquer fluxo, recomenda-se conferir:

* [ ] Acesso ao terminal do sistema operacional utilizado
* [ ] Caminho correto para a pasta dos scripts
* [ ] URL do sistema em teste disponível
* [ ] Template de documentação em mãos
* [ ] Prioridade dos fluxos a serem gravados definida
* [ ] Pasta de salvamento dos scripts pronta para uso

> 💡 *Ter o ambiente preparado reduz falhas e evita retrabalho.*

---

## 3️⃣ Abertura e Navegação no Terminal

### **Como abrir o terminal?**

* **Windows:**

  * Pressione `Win + R` → digite `cmd` → pressione `Enter`.

* **Mac:**

  * Pressione `Cmd + Espaço` → digite `Terminal` → pressione `Enter`.

* **Linux:**

  * Abra o menu de aplicativos → procure por “Terminal” → abra.

#### **Fluxo Visual – Abertura do Terminal**

```ascii
╔═════════════════════════════════╗
║     Abrir Terminal no SO       ║
╚═════════════════════════════════╝
   ⬇️ Escolher plataforma
┌────────────┬──────────────┬────────────┐
│  Windows   │    Mac       │   Linux    │
├────────────┼──────────────┼────────────┤
│ Win+R      │ Cmd+Espaço   │ Menu Apps  │
│ → cmd      │ → Terminal   │ → Terminal │
└────────────┴──────────────┴────────────┘
```

---

### **Como navegar até a pasta correta?**

* Utilizar `cd` para entrar na pasta:

  * Windows: `cd C:\Users\QA\Projetos\playwright-tests`
  * Mac/Linux: `cd /home/qa/playwright-tests`
* Para voltar um diretório: `cd ..`
* Para listar arquivos:

  * Windows: `dir`
  * Mac/Linux: `ls`

#### **Fluxo Visual – Navegação**

```ascii
╔════════════════════════════╗
║  Navegação Entre Pastas    ║
╚════════════════════════════╝
         |
   cd caminho/da/pasta
         |
     cd ..   ← Volta
         |
      dir/ls  ← Lista arquivos
```

> ℹ️  Certifique-se de estar na pasta correta antes de iniciar a gravação.

---

## 4️⃣ Gravação do Fluxo – Passo a Passo

A gravação do fluxo é a base do processo de automação. Cada fluxo deve ser gravado isoladamente, sem misturar etapas ou funcionalidades.

### **Instruções Detalhadas**

1.  Confirme que está na pasta correta do terminal.

2.  Digite e execute o comando (ajuste a URL conforme necessário):

    ```
    npx playwright codegen https://enderecodomeusistema.com
    ```

3.  Ao executar o comando, **duas janelas irão abrir**. É fundamental entender o papel de cada uma. **Consulte a próxima seção para um guia detalhado sobre a interface.**

4.  Na janela do navegador, realize o fluxo completo (exemplo: login, cadastro, criação de ticket), do início ao fim, sem sair ou navegar por áreas não relacionadas.

5.  Evite abrir menus, acessar páginas desnecessárias ou testar mais de um fluxo na mesma gravação.

6.  Caso algum passo seja feito de maneira errada, feche as duas janelas e inicie o comando novamente.

### 4.1 Entendendo a Interface do Codegen

Quando a gravação começa, você verá estas duas janelas:

```ascii
┌───────────────────────────────┐      ┌────────────────────────────────┐
│                               │      │ 👽 PLAYWRIGHT INSPECTOR        │
│      🌐 NAVEGADOR LIMPO       │      │                                │
│                               │      │ ⏺️ Recording is on...          │
│ É nesta janela que você       │      │                                │
│ interage com o site: clica,   │      │ O código da sua gravação       │
│ digita e navega como um       │      │ aparece aqui em tempo real.    │
│ usuário faria.                │      │ ...                            │
│                               │      │                                │
└───────────────────────────────┘      │ [▶️] [⏹️] [📋 Copy] [🗑️ Clear] │
                                       └────────────────────────────────┘
```

  * **Dica sobre o "Popup de HTML":** Ao passar o mouse sobre os elementos no **Navegador Limpo**, o Playwright irá destacar o seletor. **Ignore essa caixa e clique no elemento normalmente**. Ela serve apenas para mostrar ao desenvolvedor como o elemento está sendo identificado.
  * **Se a janela do Inspector atrapalhar:** Apenas arraste-a para o lado.

> 🎯 *Fluxo bem gravado = automação mais confiável\!*

-----

## 5️⃣ Salvamento e Nomeação do Script

Após concluir a gravação, o processo para salvar é diferente do usual. Não existe um botão "Salvar arquivo". O método correto é **Copiar e Colar**.

### **Instruções Detalhadas**

1.  Com o fluxo concluído no **Navegador Limpo**, mova sua atenção para a janela do **Playwright Inspector**.
2.  Clique no botão **`[📋 Copy]`** para copiar todo o código gerado.
3.  Abra seu editor de texto ou programa de desenvolvimento e crie um novo arquivo em branco.
4.  **Cole** o código que você acabou de copiar dentro deste novo arquivo.
5.  Salve o arquivo na pasta designada, usando um nome objetivo e descritivo. O padrão é terminar com `.spec.js` ou `.spec.ts`.
      * `login-basico.spec.js`
      * `criar-ticket.spec.js`
      * `editar-perfil.spec.js`

#### **Fluxo Visual – Salvamento (Corrigido)**

```ascii
╔════════════════════════════╗
║     Salvamento do Script   ║
╚════════════════════════════╝
        |
[ Finalizar gravação no Navegador ]
        |
[ Na janela do Inspector, clicar em "Copy" ]
        |
[ Criar um novo arquivo .js/.ts no editor ]
        |
[ Colar o código copiado no arquivo ]
        |
[ Salvar o arquivo com nome padrão ]
```

> 🗂️ *Organização nos nomes facilita busca e manutenção dos testes.*

---

## 6️⃣ **Documentação e Template**

### **O que deve ser salvo e em qual formato?**

* **Arquivo de Script Gerado:**

  * Tipo: `.ts` ou `.js` (gerado pelo Playwright Codegen)
  * Exemplo: `login-basico.spec.ts`
* **Arquivo de Documentação do Fluxo:**

  * Tipo: `.md` (recomendado), `.txt` (opcional, se não houver suporte ao Markdown)
  * Exemplo: `login-basico.md`
* **Organização recomendada:**

  ```
  /fluxos-gravados
    ├── login-basico.spec.ts
    ├── login-basico.md
    ├── criar-ticket.spec.ts
    ├── criar-ticket.md
  ```

> 💡 **Sugestão:** Utilize sempre arquivos `.md` para documentação — facilita leitura, edição e padronização.

---

### **Template de Documentação (Exemplo .md)**

```markdown
---
Nome do Fluxo:
Login Básico

Objetivo do Fluxo:
Validar que o usuário consegue acessar o sistema utilizando credenciais válidas.

Passos Executados:
1. Acessar página de login (/login)
2. Preencher campo de usuário
3. Preencher campo de senha
4. Clicar em “Entrar”
5. Verificar acesso ao dashboard

Observações:
Fluxo executado conforme esperado. Não foram observados erros.
---
```

* Salve o template preenchido junto ao arquivo de script correspondente.
* Cada fluxo = 1 arquivo `.spec.ts` + 1 arquivo `.md` (ou `.txt`).

---

### **Fluxo Visual – Documentação**

```ascii
╔════════════════════════════════╗
║ Documentação do Fluxo Gravado  ║
╚════════════════════════════════╝
        |
[ Script Playwright (.spec.ts) ]
        |
[ Preencher template (.md) ]
        |
[ Salvar ambos juntos na pasta ]
```

---

## 7️⃣ Entrega e Revisão Técnica

A revisão técnica assegura que o fluxo está corretamente gravado e documentado antes de ser automatizado.

### **Instruções Detalhadas**

1. Envie o script gravado e o template preenchido conforme orientação do projeto.
2. Aguarde a validação da equipe técnica antes de iniciar novos fluxos.
3. Caso a revisão aponte ajustes necessários, revise e envie novamente.

#### **Fluxo Visual – Revisão**

```ascii
╔═════════════════════════╗
║    Entrega e Revisão    ║
╚═════════════════════════╝
        |
[ Enviar script + template ]
        |
[ Revisão técnica ]
        |
[ Correção se necessário ]
        |
[ Aprovação final ]
```

> 🔍 *Revisão é etapa obrigatória. Não prossiga sem aprovação.*

---

## 8️⃣ **Dashboard e Acompanhamento**

### **O que é o dashboard?**

* É um arquivo de controle central dos fluxos testados e seu status, normalmente um arquivo Markdown chamado `DASHBOARD.md` ou uma planilha compartilhada.

### **Como preencher?**

* O dashboard pode ser atualizado manualmente pela própria QA, pelo dev, ou por qualquer pessoa do time responsável pela organização dos fluxos.
* Basta adicionar ou atualizar uma linha para cada novo fluxo.

#### **Exemplo de Dashboard (DASHBOARD.md)**

```markdown
| Nome do Fluxo          | Objetivo                  | Status    | Script                  | Documentação          | Última Revisão        | Observações          |
|------------------------|---------------------------|-----------|-------------------------|----------------------|-----------------------|----------------------|
| Login Básico           | Login no sistema          | Gravado   | login-basico.spec.ts    | login-basico.md      | 2024-07-10            | OK                   |
| Criação de Ticket      | Abrir novo chamado        | Gravado   | criar-ticket.spec.ts    | criar-ticket.md      | 2024-07-10            | OK                   |
| Visualização de Ticket | Ver detalhes do chamado   | Gravado   | visualizar-ticket.spec.ts| visualizar-ticket.md | 2024-07-10           | Aguardando revisão   |
```

> **Instrução para QA:**
> Sempre que gravar um novo fluxo, inclua uma nova linha na tabela, preenchendo os campos conforme os arquivos salvos.
> Se não souber mexer em Markdown, pode preencher os campos em uma planilha e pedir para um dev transferir para o `DASHBOARD.md`.

---

### **Fluxo Visual – Dashboard**

```ascii
╔══════════════════════════════╗
║   Atualização do Dashboard   ║
╚══════════════════════════════╝
        |
[ Novo fluxo documentado ]
        |
[ Adicionar/atualizar linha no DASHBOARD.md ]
        |
[ Salvar e compartilhar com o time ]
```

---

## 9️⃣ Dúvidas Frequentes – FAQ

* **É necessário saber programar?**
  Não. Basta seguir o passo a passo, preencher o template e realizar o fluxo normalmente.

* **Posso gravar vários fluxos juntos?**
  Não. Grave sempre um fluxo por vez para garantir organização e clareza.

* **O que fazer se errar durante a gravação?**
  Recomenda-se reiniciar o processo desde o início.

* **Como proceder em caso de dúvidas técnicas?**
  Consulte o responsável técnico ou a equipe de suporte do projeto.

#### **Fluxo Visual – FAQ**

```ascii
╔══════════════════════════╗
║      Dúvidas Comuns      ║
╚══════════════════════════╝
    |
[ Seguir passo a passo ]
    |
[ Consultar FAQ em caso de dúvida ]
    |
[ Acionar suporte se necessário ]
```

> 🤝 *Dúvidas recorrentes devem ser comunicadas para melhoria deste documento.*

---

## 🔟 **Resumo Visual – Jornada Completa**

### **Fluxo Macro (Ajustado e Humanizado)**

```ascii
╔═════════════════════════════════════════════════════════════════════════╗
║           JORNADA DE AUTOMAÇÃO DE FLUXOS E2E - PLAYWRIGHT               ║
╠══════╦═══════════════╦═══════════════╦═══════════════╦════════╦═════════╣
║ Prep ║ Gravação      ║ Documentação  ║ Revisão       ║ Dash   ║ Final   ║
╠══════╬═══════════════╬═══════════════╬═══════════════╬════════╬═════════╣
║  📋  ║     🖱️        ║      📝       ║      🔍       ║  📊    ║   ✅    ║
╠══════╩═══════════════╩═══════════════╩═══════════════╩════════╩═════════╣
║   ⬇️   ║      ⬇️     ║      ⬇️       ║       ⬇️      ║   ⬇️   ║    ⬇️   ║
║ Fluxo  ║   Fluxo de  ║   Fluxo de    ║   Fluxo de    ║ Fluxo  ║  Fluxo  ║
║ dePrep ║   Gravação  ║ Documentação  ║    Revisão    ║  Dash  ║  Final  ║
╚═════════════════════════════════════════════════════════════════════════╝
```

---

## 🛑 **Fluxo de Erro**

Situação: Gravação interrompida, fluxo errado, ação inesperada.

### **O que fazer?**

1. Fechar a janela do Playwright Codegen.
2. Voltar ao terminal.
3. Iniciar novamente a gravação.
4. Se o erro for recorrente, registrar no campo “Observações” do template.
5. Se não conseguir seguir, comunicar o responsável técnico.

#### **Fluxo Visual – Erro**

```ascii
╔════════════════════════════╗
║        Fluxo de Erro      ║
╚════════════════════════════╝
        |
[ Gravação apresenta erro ]
        |
[ Fechar janela / interromper ]
        |
[ Recomeçar gravação ]
        |
[ (Se necessário) Anotar em Observações ]
        |
[ Comunicar responsável, se for o caso ]
```

---

## 🔁 **Fluxo de Regravação**

Situação: O fluxo foi reprovado na revisão, está incompleto ou foi identificado erro de gravação.

### **O que fazer?**

1. Rever as orientações do revisor.
2. Iniciar o processo de gravação novamente, corrigindo o ponto identificado.
3. Salvar o novo arquivo, preferencialmente com o mesmo nome do fluxo anterior (sobrescrevendo ou criando uma nova versão, como `login-basico-v2.spec.ts`).
4. Atualizar a documentação e dashboard.

#### **Fluxo Visual – Regravação**

```ascii
╔════════════════════════════╗
║    Fluxo de Regravação    ║
╚════════════════════════════╝
        |
[ Revisão aponta ajuste ]
        |
[ Rever orientações ]
        |
[ Regravar fluxo no Playwright ]
        |
[ Salvar nova versão do script ]
        |
[ Atualizar documentação e dashboard ]
```

---

## 🚦 **Onboarding Visual para Iniciantes**

### **Resumo Visual Passo a Passo**

```ascii
╭──────────────╮
│ 1. Preparar │
│    Ambiente │
╰──────┬──────╯
       v
╭──────────────╮
│ 2. Abrir     │
│    Terminal  │
╰──────┬──────╯
       v
╭──────────────╮
│ 3. Navegar   │
│    até Pasta │
╰──────┬──────╯
       v
╭──────────────╮
│ 4. Executar  │
│    comando   │
│    Playwright│
╰──────┬──────╯
       v
╭──────────────╮
│ 5. Realizar  │
│    Fluxo     │
│    no Navega.│
╰──────┬──────╯
       v
╭──────────────╮
│ 6. Exportar  │
│    Script    │
╰──────┬──────╯
       v
╭──────────────╮
│ 7. Preencher │
│    Template  │
╰──────┬──────╯
       v
╭──────────────╮
│ 8. Entregar  │
│    para      │
│    Revisão   │
╰──────┬──────╯
       v
╭──────────────╮
│ 9. Atualizar │
│    Dashboard │
╰──────────────╯
```

* Cada bloco representa uma etapa fundamental do processo.
* Recomenda-se imprimir ou compartilhar este passo a passo no onboarding.

---

## 🏁 **Considerações Finais**

* Utilize sempre a estrutura de arquivos e documentação recomendada para garantir padronização.
* Em caso de dúvida ou dificuldade, consulte este material, a equipe de suporte ou responsável técnico.
* Fluxos de erro e regravação são normais e fazem parte do processo de melhoria contínua.
* O dashboard facilita a visão do todo e evita retrabalho.

---

**FIM DO DOCUMENTO**

---
