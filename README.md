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

1. Crie um repositório **público** no GitHub (ex.: `LandingControleIntegrado`).
2. No repositório: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Faça o push desta pasta para a branch `main`.
4. O workflow `.github/workflows/deploy-github-pages.yml` faz o deploy automático.

URL típica: `https://SEU_USUARIO.github.io/LandingControleIntegrado/`

### Domínio próprio (`controleintegrado.com.br`)

1. Em Pages, adicione o domínio customizado.
2. Crie o arquivo `public/CNAME` com o domínio e ajuste o `--base-href=/` no workflow.
3. No DNS do domínio, aponte um registro `CNAME` (ou `A`/`AAAA` conforme a doc do GitHub Pages).

## Estrutura

- `src/app/pages/home/sections/*` — seções independentes
- `src/app/shared/mocks/*` — dados mockados
- `src/app/core/layout/*` — header e footer
- `public/robots.txt` e `public/sitemap.xml` — SEO
