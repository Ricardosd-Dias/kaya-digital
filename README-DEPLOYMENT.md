# Deploy no Vercel - Guia Completo

Este guia explica como fazer deploy do frontend da tua agência de marketing digital no Vercel.

## 📋 Pré-requisitos

1. Conta no [Vercel](https://vercel.com) (gratuita)
2. Conta no [GitHub](https://github.com) (recomendado) ou Git local
3. Node.js instalado (para testar localmente)

## 🚀 Método 1: Deploy via GitHub (Recomendado)

### Passo 1: Criar Repositório no GitHub

1. Vai a https://github.com/new
2. Cria um novo repositório (ex: `agencia-marketing`)
3. **Não** inicializes com README (já tens ficheiros)

### Passo 2: Push do Código para GitHub

Abre o terminal na pasta do projeto e executa:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/SEU-USERNAME/agencia-marketing.git
git push -u origin main
```

### Passo 3: Importar no Vercel

1. Vai a [vercel.com/new](https://vercel.com/new)
2. Clica em "Import Git Repository"
3. Seleciona o repositório que acabaste de criar
4. O Vercel detetará automaticamente que é um projeto Vite
5. Clica em **"Deploy"**

✅ **Pronto!** O Vercel vai fazer build e deploy automaticamente.

---

## 🚀 Método 2: Deploy via Vercel CLI (Alternativa)

### Passo 1: Instalar Vercel CLI

```bash
npm install -g vercel
```

### Passo 2: Login no Vercel

```bash
vercel login
```

### Passo 3: Deploy

Na pasta do projeto, executa:

```bash
vercel
```

Responde às perguntas:
- **Set up and deploy?** → Yes
- **Which scope?** → Seleciona a tua conta
- **Link to existing project?** → No
- **Project name?** → (aceita o default ou escolhe um nome)
- **Directory?** → `./` (aceita o default)

Para deploy em produção:

```bash
vercel --prod
```

---

## ⚙️ Configuração Importante

### O ficheiro `vercel.json` já está configurado:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

Isto garante que:
- ✅ React Router funciona corretamente
- ✅ Todas as rotas redirecionam para `index.html`
- ✅ O build é feito com Vite

---

## 🔗 Adicionar Domínio Personalizado

### No Dashboard do Vercel:

1. Vai ao projeto → **Settings** → **Domains**
2. Adiciona o teu domínio (ex: `agencia.pt`)
3. O Vercel fornecerá registos DNS

### No teu fornecedor de domínio (GoDaddy, Namecheap, etc.):

Adiciona estes registos DNS:

```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

⏱️ Aguarda **24-48h** para propagação DNS completa.

---

## 📦 Estrutura de Ficheiros para Deploy

Os ficheiros importantes para deploy são:

```
/
├── index.html          ← Entrada HTML (criado)
├── package.json        ← Dependências e scripts
├── vite.config.ts      ← Configuração Vite
├── vercel.json         ← Configuração Vercel (criado)
├── .gitignore          ← Ficheiros a ignorar (criado)
├── src/
│   ├── main.tsx        ← Entry point React (criado)
│   ├── app/
│   │   ├── App.tsx
│   │   ├── components/
│   │   ├── pages/
│   │   └── routes.ts
│   └── styles/
├── utils/
│   └── supabase/
│       └── info.tsx    ← Configuração Supabase
```

**⚠️ NOTA:** A pasta `/supabase/functions/` NÃO será deployada no Vercel porque é backend. O backend já está no Supabase e continuará a funcionar através da URL `https://lduykotframjhbacjpzw.supabase.co/functions/v1/make-server-079be383/...`

---

## ✅ Checklist Pré-Deploy

- [ ] `package.json` tem scripts `build` e `dev`
- [ ] `index.html` existe na raiz
- [ ] `src/main.tsx` existe e importa App
- [ ] `vercel.json` está configurado
- [ ] `.gitignore` exclui `node_modules` e `dist`
- [ ] Testar build localmente: `npm install && npm run build`

---

## 🧪 Testar Localmente Antes do Deploy

```bash
# Instalar dependências
npm install

# Build de produção
npm run build

# Preview do build
npm run preview
```

Se tudo funcionar no preview, está pronto para deploy!

---

## 🆘 Troubleshooting

### Erro: "Build failed"
- Verifica se todas as dependências estão em `package.json`
- Testa `npm run build` localmente

### Erro: "404 on page refresh"
- O `vercel.json` deve ter a configuração de `rewrites`
- Já está incluído no projeto ✅

### React Router não funciona
- Confirma que `vercel.json` tem `rewrites` configurado
- Já está correto neste projeto ✅

### Formulário de contacto não funciona
- O backend Supabase já está configurado
- Não precisas de fazer nada, vai funcionar automaticamente ✅

---

## 📞 URLs Finais

Após deploy terás:

- **Frontend Vercel:** `https://SEU-PROJETO.vercel.app`
- **Backend Supabase:** `https://lduykotframjhbacjpzw.supabase.co/functions/v1/make-server-079be383/...`
- **Domínio Custom:** `https://teu-dominio.pt` (opcional)

---

## 🎉 Próximos Passos

1. ✅ Deploy no Vercel
2. ✅ Testa todas as funcionalidades (navegação, formulário, etc.)
3. ✅ Adiciona domínio personalizado (opcional)
4. ✅ Configura analytics (Vercel Analytics gratuito)
5. ✅ Ativa Vercel Speed Insights (gratuito)

---

**Boa sorte com o deploy! 🚀**
