# Nozzle Frontend

Landing page and Dashboard for **nozzle** - a coding agent that lives in your Discord. Select a GitHub repo, @mention nozzle to create tasks, and it submits PRs.

Built with Next.js 15 (App Router), React 19, Three.js + React Three Fiber (custom shader background), and TypeScript.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command         | Description                 |
| --------------- | --------------------------- |
| `npm run dev`   | Start the dev server        |
| `npm run build` | Production build            |
| `npm run start` | Serve the production build  |
| `npm run lint`  | Lint with oxlint            |

## Docker

```bash
docker compose up --build
```

Serves on port `3974` (see `Dockerfile` / `docker-compose.yml`). The image uses Next.js standalone output, so keep `output: "standalone"` in `next.config.ts` when building for Docker.

## Structure

- `app/` — Next.js App Router entry (`page.tsx` renders `App`)
- `components/` — LandingPage, Header, CommandBar, Silk (R3F shader background), Loader, FaviconHandler
- `src/` — unused placeholder for shared code
