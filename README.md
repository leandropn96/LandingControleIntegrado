# Controle Integrado — Landing Page

Landing institucional do ERP **Controle Integrado** (Angular 20 + SSR).

## Stack

- Angular 20 (SSR)
- Angular Material
- Tabler Icons
- SCSS

## Rodar local

Requer Node.js **>= 20.19** ou **>= 22.12**.

```bash
cd LandingControleIntegrado
npm install
npm start
```

Abra `http://localhost:4200`.

## Build SSR

```bash
npm run build
npm run serve:ssr:LandingControleIntegrado
```

## GitHub Pages (grátis)

O Pages só serve arquivos estáticos. Use o build dedicado:

```bash
npm run build:gh-pages
```

### Publicar

1. Repositório público no GitHub (ex.: `LandingControleIntegrado`).
2. Em **Settings → Pages → Build and deployment**:
   - Source: **Deploy from a branch**
   - Branch: **gh-pages** / **/ (root)** → Save
3. Push na `main` dispara o workflow, que atualiza a branch `gh-pages`.

URL: `https://leandropn96.github.io/LandingControleIntegrado/`

### Domínio próprio (`controleintegrado.com.br`)

1. Em Pages, adicione o domínio customizado.
2. Crie o arquivo `public/CNAME` com o domínio e ajuste o `--base-href=/` no workflow.
3. No DNS do domínio, aponte um registro `CNAME` (ou `A`/`AAAA` conforme a doc do GitHub Pages).

## Estrutura

- `src/app/pages/home/sections/*` — seções independentes
- `src/app/shared/mocks/*` — dados mockados
- `src/app/core/layout/*` — header e footer
- `public/robots.txt` e `public/sitemap.xml` — SEO
