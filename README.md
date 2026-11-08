# Controle de Estoque — Portfólio Demo

Projeto demonstrativo independente de gestão de estoque para duas unidades (Loja e Quiosque).
**Desenvolvido por Cauã Fortini Quirino.**

> **DEMO PÚBLICA:** nenhum login real, banco de produção, e-mail, senha ou chave do Supabase é utilizado.

## Testar
Abra `index.html` pelo Live Server do VS Code ou publique a pasta no Netlify.
Clique em **Explorar demonstração**. Os produtos e movimentações são fictícios.
A demo permite explorar o dashboard, cadastrar produtos, registrar entradas, importar Excel,
conferir estoque e exportar relatórios. Alterações ficam no `localStorage` do navegador;
use **Restaurar dados fictícios** para recomeçar. Não há sincronização entre aparelhos.

## Tecnologias
HTML5, CSS3, JavaScript, SheetJS (CDN), layout responsivo e gráficos do frontend original.
A versão privada do projeto utiliza Supabase/PostgreSQL com autenticação e regras RLS.

## Segurança e privacidade
- O projeto público não contém `config.js` real, credenciais, URLs do banco privado nem dados reais.
- Não possui integração de autenticação remota ou chamadas ao Supabase.
- `config.example.js` é somente documentação.
- Não envie backups de produção nem arquivos `.env` para o repositório.
- Revise também o histórico de commits antes de publicar; `.gitignore` não apaga segredos já commitados.
- Não utilize esta versão para operar uma loja real.

## Limitações
- `localStorage` é somente para demonstração e não é armazenamento confiável para produção.
- Importações Excel dependem de bibliotecas CDN e devem ser testadas no navegador.
- O modelo 3D e o logotipo da marca foram excluídos do repositório por não haver licença de redistribuição comprovada.
- A experiência 3D original permanece na versão privada; a demo usa visual CSS abstrato.
- Este é um projeto independente, sem afiliação oficial com a marca Havaianas.

## Publicar no GitHub
1. Crie repositório público novo.
2. Adicione **somente o conteúdo desta pasta**.
3. Verifique com `git status` se não existem arquivos privados.
4. Publique uma demonstração estática no Netlify ou GitHub Pages.
5. Acrescente capturas de tela e URL da demo ao README.

## Aviso sobre licença
Código disponibilizado para avaliação de portfólio. Nenhuma licença de reutilização foi concedida.
Consulte o autor antes de redistribuir ou reutilizar comercialmente.
