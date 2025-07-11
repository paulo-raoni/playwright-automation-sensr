# 📋 TODO.md — Automação E2E Playwright SNSR

---

### 🚦 O que é este arquivo?

Este arquivo centraliza **gaps conhecidos**, **melhorias desejadas**, integrações futuras e observações estratégicas do repositório.  
Nada de micro-tarefa: é backlog macro, visão de evolução, lições aprendidas e lembretes que não podem se perder no tempo.

---

## 🔥 **Automação & Cobertura de Testes**

- [ ] Garantir 100% de cobertura dos fluxos críticos e de risco alto (login, tickets, perfis, permissões)
- [ ] Mapear e automatizar fluxos edge-case ainda não cobertos:  
- [ ] Login 2FA e reset de senha por e-mail  
- [ ] Upload/download de arquivos grandes  
- [ ] Testes multi-tela e multi-abas  
- [ ] Validar assertividade dos scripts atuais (garantir asserts de verdade, não só “clicou/navegou”)
- [ ] Criar massa de dados/usuários de teste confiável para rodar E2E sem afetar produção

---

## 📊 **Dashboard, Relatórios & Rastreabilidade**

- [ ] Avaliar migração do DASHBOARD.md para uma solução mais dinâmica (Notion, Google Sheets ou dashboard web) se time aumentar
- [ ] Automatizar geração de relatório semanal de status (script em Node, Github Actions, etc)
- [ ] Adicionar campos de criticidade/risco por fluxo no dashboard

---

## ⚙️ **Integração Contínua & Alertas**

- [ ] Configurar pipeline CI/CD para rodar testes E2E em todo PR (GitHub Actions)
- [ ] Salvar screenshots e vídeos das execuções como artefato do CI
- [ ] Notificar falhas de teste via Slack, Teams ou e-mail
- [ ] Explorar integração com ferramentas de cobertura de código (Codecov, Coveralls)

---

## 📚 **Documentação & Onboarding**

- [ ] Criar vídeo/gif de onboarding mostrando ciclo completo (do clone ao PR com teste rodando)
- [ ] Enriquecer Exemplos.md com casos ultra-avançados, edge-cases reais e anti-padrões
- [ ] Adicionar troubleshooting detalhado para erros comuns (timeout, waits, CI headless)
- [ ] Revisar e atualizar todos os fluxogramas e diagramas UML periodicamente
- [ ] Garantir que README/onboarding tenham links funcionais para todos artefatos importantes

---

## 💡 **Sugestões, Feedbacks e Observações**

- [ ] Abrir uma issue para sugestão de melhoria sempre que um novo fluxo complexo for identificado
- [ ] Coletar feedback da QA e Devs a cada release relevante — ajustar guias/templates conforme dor real
- [ ] Registrar no README principais decisões arquiteturais, mudanças de padrão e lições aprendidas
- [ ] Manter este TODO.md como “living document” — não deixar virar cemitério!

---

## 🛡️ **Riscos e Atenções Futuras**

- [ ] Monitorar aumento do tempo de execução total dos testes — se passar de X minutos, avaliar paralelização
- [ ] Manter scripts idempotentes: devem poder rodar múltiplas vezes sem quebrar ambiente
- [ ] Lembrar que todo fluxo novo precisa de documentação (QA e Dev): sem doc, não entra no dashboard!
- [ ] Reforçar cultura de revisão crítica antes de mergear fluxos novos ou alterar scripts antigos

---

> **Última atualização:** 2025-07-10  
> **Este documento é revisado periodicamente e pode receber sugestões via PR ou issue.**

