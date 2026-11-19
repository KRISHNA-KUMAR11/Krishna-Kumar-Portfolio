# Krishna Kumar Tummala

Portfolio site for a full-stack engineer. Dark and light themes, project case studies, and two system-design pages. Contact opens the visitor's email app. GitHub and LinkedIn stay hidden until you add them.

## Prerequisites

- Node.js 20 or newer
- npm

## Scripts

```bash
npm install
npm run dev
npm run typecheck
npm test
npm run test:e2e
npm run build
npm run preview
```

The dev server prints a local URL, usually `http://127.0.0.1:5173`.

## Source layout

```text
src/
├── main.tsx
├── styles.css
├── environments/
│   └── environment.ts
├── app/
│   ├── App.tsx
│   └── app-routing.tsx
├── features/
│   ├── home/
│   ├── projects/
│   ├── architecture/
│   └── notfound/
├── shared/
│   ├── components/
│   │   ├── navbar/
│   │   ├── layout/
│   │   ├── ui/
│   │   └── architecture/
│   └── hooks/
├── services/
├── helpers/
└── constants/
```

Profile, projects, and architecture copy live in `src/constants/`. Mail and phone settings live in `src/environments/environment.ts`. To show public profiles later, set `githubUsername` and `linkedinUrl` in `src/constants/site.ts`. Empty values render no icons and no links.

## Deploy

The app is a static Vite build. `vercel.json` rewrites unknown paths to `index.html` so project and architecture routes work on refresh. GitHub Actions in `.github/workflows/ci.yml` runs the typecheck, unit tests, and Chromium end-to-end tests.

## Contact

The form checks name, email, subject, and message with Zod. A valid submit opens a `mailto:` link to `krishnakumarnaidu11@gmail.com`. There is no form backend.
