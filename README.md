# Start Corretora - Site em Next.js

Site institucional da Start Corretora reconstruído em **Next.js 14** + **Tailwind CSS**, pronto para deploy no GitHub e Vercel.

## 🚀 Funcionalidades

- ✅ Site institucional com visual fiel ao original
- ✅ Blog completo com posts em Markdown
- ✅ Formulário de cotação funcional (integrado com Resend)
- ✅ Botão WhatsApp flutuante
- ✅ Painel administrativo para gerenciar posts (`/admin`)
- ✅ SEO otimizado (sitemap, robots, metadados)
- ✅ Totalmente responsivo
- ✅ Performance A+ (estático sempre que possível)

## 📋 Pré-requisitos

- Node.js 18+ instalado
- Conta no GitHub
- Conta na Vercel
- (Opcional) Conta no Resend para envio de e-mails

## 🛠️ Como rodar localmente

```bash
# 1. Instale as dependências
npm install

# 2. Copie o arquivo de variáveis de ambiente
cp .env.example .env.local

# 3. Edite o .env.local com suas credenciais

# 4. Rode em modo desenvolvimento
npm run dev
```

Acesse: http://localhost:3000

## 📝 Painel Administrativo

Acesse `/admin` para gerenciar os posts do blog.

**Senha padrão:** `startcorretora2025`

⚠️ **IMPORTANTE:** altere a senha em `.env.local` (variável `ADMIN_PASSWORD`) antes de subir para produção.

## 🌐 Deploy na Vercel

### Opção 1: Via GitHub (recomendado)

1. Crie um repositório no GitHub e faça push deste projeto:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/start-prevent-senior.git
git push -u origin main
```

2. Acesse [vercel.com](https://vercel.com) e clique em **"Add New Project"**
3. Importe o repositório do GitHub
4. Configure as variáveis de ambiente:
   - `ADMIN_PASSWORD` - senha do painel admin
   - `RESEND_API_KEY` - chave da Resend para e-mails (opcional)
5. Clique em **Deploy**

### Opção 2: Via CLI

```bash
npm install -g vercel
vercel
```

## 📧 Configurando o Envio de E-mails

O formulário de contato usa a **Resend** (gratuito até 3.000 e-mails/mês):

1. Crie conta em [resend.com](https://resend.com)
2. Verifique o domínio `startcorretora.com.br`
3. Gere uma API Key
4. Adicione na Vercel: `RESEND_API_KEY=re_xxxxx`

> Sem a chave configurada, os formulários ainda funcionam, mas só logam no console (modo dev).

## ✏️ Como criar/editar posts

### Pelo painel admin (recomendado)
Acesse `/admin`, faça login e use a interface gráfica.

### Manualmente
Crie um arquivo `.md` em `content/posts/` com este formato:

```markdown
---
title: "Título do post"
date: "2025-12-20"
excerpt: "Resumo curto"
author: "Start Corretora"
category: "Categoria"
---

## Conteúdo em Markdown

Texto normal, **negrito**, *itálico*, [links](https://exemplo.com).
```

## 📁 Estrutura do projeto

```
.
├── app/                    # Páginas (App Router)
│   ├── page.tsx           # Home
│   ├── sobre-nos/         # Página Sobre
│   ├── cotacao/           # Página de cotação
│   ├── blog/              # Blog (lista + post individual)
│   ├── admin/             # Painel administrativo
│   └── api/               # APIs (contato, posts)
├── components/            # Componentes React
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── QuoteForm.tsx
│   └── WhatsAppButton.tsx
├── content/posts/         # Posts do blog em Markdown
├── lib/                   # Helpers (leitura de posts)
├── public/                # Imagens e arquivos estáticos
└── tailwind.config.js     # Config do Tailwind
```

## 🎨 Cores da marca

- Verde Prevent: `#00a859`
- Azul institucional: `#003b7a`

Editáveis em `tailwind.config.js`.

## 📞 Contato

- WhatsApp: (21) 99670-3834
- E-mail: gustavo@startcorretora.com.br / flavio@startcorretora.com.br

---

Desenvolvido com Next.js + Tailwind CSS.
