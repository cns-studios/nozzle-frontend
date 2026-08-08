FROM node:24 AS builder

WORKDIR /app

COPY package.json .
COPY pnpm-lock.yaml .
COPY pnpm-workspace.yaml .

RUN npm install --global corepack@latest
RUN corepack enable pnpm

RUN pnpm i
RUN pnpm approve-builds --all

COPY next.config.ts .
COPY tsconfig.json .
COPY next-env.d.ts .
COPY components.json .

COPY app ./app
COPY components ./components

RUN pnpm build

FROM node:24-alpine AS runner

ENV NODE_ENV=production PORT=3974 HOSTNAME=0.0.0.0
WORKDIR /app
COPY --from=builder /app/.next/standalone .
COPY --from=builder /app/.next/static /static
COPY public ./public

EXPOSE 3974

CMD ["node", "server.js"]
