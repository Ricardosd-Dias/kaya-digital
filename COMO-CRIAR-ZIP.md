# Como Criar o ZIP para Deploy

## 🎯 Ficheiros Necessários para o ZIP

Precisas incluir APENAS os ficheiros do **frontend**. A pasta `/supabase/` NÃO deve ser incluída porque o backend já está no Supabase.

## 📦 Método 1: Criar ZIP Manualmente

### No Windows:

1. Seleciona estes ficheiros e pastas na raiz do projeto:

   ```
   ✅ src/
   ✅ utils/
   ✅ index.html
   ✅ package.json
   ✅ vite.config.ts
   ✅ vercel.json
   ✅ postcss.config.mjs
   ✅ .gitignore
   ✅ README-DEPLOYMENT.md
   ```

2. **NÃO incluir:**

   ```
   ❌ node_modules/
   ❌ dist/
   ❌ supabase/
   ❌ .git/
   ❌ pnpm-lock.yaml
   ```

3. Clica com o botão direito → **Enviar para** → **Pasta comprimida (zip)**

4. Renomeia para `agencia-marketing-deploy.zip`

### No macOS:

1. Seleciona os mesmos ficheiros listados acima
2. Clica com o botão direito → **Comprimir**
3. Renomeia para `agencia-marketing-deploy.zip`

### No Linux:

```bash
zip -r agencia-marketing-deploy.zip \
  src/ \
  utils/ \
  index.html \
  package.json \
  vite.config.ts \
  vercel.json \
  postcss.config.mjs \
  .gitignore \
  README-DEPLOYMENT.md \
  -x "node_modules/*" "dist/*" "supabase/*" ".git/*"
```

---

## 📦 Método 2: Usar Git Archive (Recomendado)

Se tens Git instalado:

```bash
# Na pasta do projeto, executa:
git init
git add .
git commit -m "Prepare for deployment"
git archive --format=zip --output=agencia-marketing-deploy.zip HEAD \
  src/ utils/ index.html package.json vite.config.ts vercel.json \
  postcss.config.mjs .gitignore README-DEPLOYMENT.md
```

---

## 📦 Método 3: Deploy Direto Sem ZIP (Mais Fácil!)

**Na verdade, NÃO PRECISAS de ZIP!**

### Opção A: Vercel CLI (Mais Simples)

```bash
# 1. Instala Vercel CLI
npm install -g vercel

# 2. Faz login
vercel login

# 3. Deploy (na pasta do projeto)
vercel

# 4. Para deploy em produção
vercel --prod
```

### Opção B: GitHub + Vercel (Melhor para Manutenção)

```bash
# 1. Cria repositório no GitHub
# Vai a https://github.com/new

# 2. Na pasta do projeto:
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/SEU-USERNAME/SEU-REPO.git
git push -u origin main

# 3. Importa no Vercel
# Vai a vercel.com/new e seleciona o repositório
```

---

## ✅ Verificação Final

Antes de criar o ZIP, confirma que tens estes ficheiros:

- [x] `/index.html` - Entry point HTML
- [x] `/src/main.tsx` - Entry point React
- [x] `/vercel.json` - Configuração Vercel
- [x] `/package.json` - Com scripts `dev`, `build`, `preview`
- [x] `/.gitignore` - Para excluir node_modules
- [x] `/README-DEPLOYMENT.md` - Instruções de deploy

---

## 🎯 Estrutura Final do ZIP

```
agencia-marketing-deploy.zip
│
├── index.html
├── package.json
├── vite.config.ts
├── vercel.json
├── postcss.config.mjs
├── .gitignore
├── README-DEPLOYMENT.md
│
├── src/
│   ├── main.tsx
│   ├── app/
│   │   ├── App.tsx
│   │   ├── components/
│   │   ├── pages/
│   │   ├── data/
│   │   ├── hooks/
│   │   └── routes.ts
│   └── styles/
│       ├── index.css
│       ├── fonts.css
│       ├── tailwind.css
│       └── theme.css
│
└── utils/
    └── supabase/
        └── info.tsx
```

**Tamanho esperado:** ~50KB (sem node_modules)

---

## 🚀 Próximo Passo

Depois de criar o ZIP (ou usar Git), segue as instruções em **README-DEPLOYMENT.md** para fazer deploy no Vercel.

**Recomendação:** Usa o método GitHub + Vercel para facilitar updates futuros! 🎉