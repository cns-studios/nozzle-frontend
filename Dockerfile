# Use node:24-alpine for smaller image size
FROM node:24 AS builder

# Set working directory
WORKDIR /app

# Copy source code
COPY . .

# Enable pnpm
RUN npm install --global corepack@latest
RUN corepack enable pnpm

# Install dependencies
RUN pnpm i
RUN pnpm approve-builds --all

# Build the application
RUN pnpm build

FROM node:24-alpine AS runner

# Set working directory
WORKDIR /app

# Set environment variables for production
ENV NODE_ENV=production \
    PORT=3974 \
    HOSTNAME="0.0.0.0" \
    NEXT_TELEMETRY_DISABLED=1

# Copy only the necessary files from builder
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

EXPOSE 3974

# Start the application
CMD ["node", "server.js"]