# Portfolio Application

Next.js application for Ali Emre’s bilingual professional portfolio.

## Commands

```bash
npm ci
npm run dev
npm run lint
npm run build
```

The production build uses Next.js static export and writes to `out/` for GitHub Pages deployment.

## Content

- Shared person, social, experience, skill and project structures are maintained in `src/app/resources/content.js`.
- Locale-specific interface and profile copy lives in `messages/en.json` and `messages/tr.json`.
- `src/app/resources/content-i18n.js` maps the shared structures to the active locale.

Do not add credentials, private CV files or confidential project data to public content.
