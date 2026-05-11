# 🚀 COMECE AQUI - Start Prevent Senior

Bem-vindo! Este guia te leva do zero ao site rodando em 5 minutos.

## ✅ Pré-requisitos (instalar 1x só)

1. **Node.js 18 ou superior** → https://nodejs.org (baixe a versão LTS)
2. **VS Code** → https://code.visualstudio.com
3. **Git** → https://git-scm.com/downloads

Verifique que está tudo OK abrindo o terminal e digitando:
```bash
node --version    # deve mostrar v18.x ou superior
npm --version     # deve mostrar 9.x ou superior
git --version     # deve mostrar 2.x ou superior
```

---

## 📂 Passo 1: Abrir no VS Code

1. **Descompacte** o arquivo `start-prevent-senior.zip` em uma pasta da sua preferência (ex: `C:\Projetos\` no Windows, ou `~/Projetos/` no Mac/Linux)
2. **Abra o VS Code**
3. Menu **File → Open Folder** (ou `Ctrl+K Ctrl+O`)
4. Selecione a pasta `start-prevent-senior`

> **Dica:** Na primeira vez que abrir, o VS Code vai sugerir instalar extensões recomendadas (Tailwind, Prettier, ESLint, etc). **Clique em "Install All"** para uma experiência completa.

---

## ▶️ Passo 2: Rodar o site (escolha 1 das opções)

### Opção A — Pelo terminal do VS Code (recomendado)

1. Abra o terminal: menu **Terminal → New Terminal** (ou `` Ctrl+` ``)
2. Cole e rode:

```bash
npm install
```
Aguarde 1-2 minutos (vai aparecer um monte de coisa, é normal).

3. Em seguida, rode:
```bash
npm run dev
```

4. Vai aparecer:
```
✓ Ready in 2s
- Local: http://localhost:3000
```

5. **Abra http://localhost:3000 no navegador** 🎉

### Opção B — Clique duplo no script

- **Windows:** dê duplo clique em `iniciar.bat`
- **Mac/Linux:** abra o terminal na pasta e rode `./iniciar.sh`

O script instala tudo automaticamente e abre o servidor.

---

## 🎨 O que você vê

Quando o site abrir, você terá:

- **Homepage** (`/`) — todas as seções da Start Corretora
- **Sobre Nós** (`/sobre-nos`)
- **Cotação** (`/cotacao`)
- **Blog** (`/blog`) — com 6 posts já criados
- **Painel Admin** (`/admin`) — gerenciar posts

### 🔑 Acessar o admin

- URL: http://localhost:3000/admin
- Senha padrão: `startcorretora2025`

> ⚠️ **Importante:** altere essa senha antes de subir pra produção! Veja a seção "Configurações" abaixo.

---

## ✏️ Passo 3: Editar conteúdo

Tudo que você quer editar está nestas pastas:

| O que editar | Onde está |
|---|---|
| Textos da home | `app/page.tsx` |
| Página Sobre Nós | `app/sobre-nos/page.tsx` |
| Página de Cotação | `app/cotacao/page.tsx` |
| Cabeçalho (menu) | `components/Header.tsx` |
| Rodapé | `components/Footer.tsx` |
| Posts do blog | `content/posts/` |
| Imagens | `public/images/` |
| Cores do site | `tailwind.config.js` |

**Edite, salve (Ctrl+S), e o site atualiza automaticamente no navegador!**

---

## ⚙️ Configurações importantes

Crie um arquivo `.env.local` na raiz do projeto (já existe um `.env.example` de modelo):

```bash
# Senha do painel admin - MUDE ANTES DE SUBIR EM PRODUÇÃO
ADMIN_PASSWORD=suaSenhaSegura123

# Resend API Key (opcional - para enviar emails do formulário)
# Crie conta em https://resend.com e gere a chave
RESEND_API_KEY=re_xxxxxxxxxxxx
```

---

## 📤 Passo 4: Subir pro GitHub + Vercel (produção)

### 1. Criar repositório no GitHub
- Acesse https://github.com/new
- Nome: `start-prevent-senior`
- Deixe **privado** se preferir
- Clique em **Create repository**

### 2. Subir o código (no terminal do VS Code)

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/start-prevent-senior.git
git push -u origin main
```

### 3. Deploy na Vercel
- Acesse https://vercel.com
- **Add New → Project**
- Importe o repositório `start-prevent-senior`
- Adicione as variáveis de ambiente:
  - `ADMIN_PASSWORD` = sua senha segura
  - `RESEND_API_KEY` = sua chave da Resend (se for usar)
- Clique em **Deploy**

Em 2 minutos seu site estará no ar em uma URL `.vercel.app`. Depois é só apontar seu domínio `startcorretora.com.br` na Vercel.

---

## 🆘 Problemas comuns

**"npm install" travou ou deu erro**
→ Apague a pasta `node_modules` e o arquivo `package-lock.json` e rode `npm install` de novo.

**"Cannot find module..." ao rodar**
→ Você esqueceu de rodar `npm install`. Rode primeiro.

**"Port 3000 is already in use"**
→ Outro app está usando a porta. Feche-o ou rode `npm run dev -- -p 3001` (vai abrir na porta 3001).

**Imagem não aparece**
→ Verifique que o arquivo está em `public/images/` com o nome exato (sensível a maiúsculas).

---

## 📚 Estrutura do projeto

```
start-prevent-senior/
├── .vscode/              # Configurações do VS Code
├── app/                  # Páginas do site (Next.js App Router)
│   ├── admin/           # Painel administrativo
│   ├── api/             # APIs (contato, posts)
│   ├── blog/            # Blog
│   ├── cotacao/         # Página de cotação
│   ├── sobre-nos/       # Página sobre
│   ├── layout.tsx       # Layout global (header + footer)
│   └── page.tsx         # Homepage
├── components/           # Componentes React reutilizáveis
├── content/posts/        # Posts do blog em Markdown
├── lib/                  # Funções auxiliares
├── public/images/        # Imagens do site
├── iniciar.bat          # Script Windows
├── iniciar.sh           # Script Mac/Linux
├── package.json         # Dependências
├── README.md            # Documentação completa
└── COMECE-AQUI.md       # Este arquivo
```

---

## 💬 Comandos úteis

```bash
npm run dev      # Roda em modo desenvolvimento (com hot reload)
npm run build    # Faz o build de produção
npm run start    # Roda o build de produção
npm run lint     # Verifica problemas no código
```

---

Pronto! Qualquer dúvida, releia o `README.md` que tem documentação completa.

**Bons códigos! 🚀**
