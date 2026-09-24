# Build the VitePress static site, then serve it with Caddy.
# Used by both Railway (Dockerfile deploy) and Dokploy.

FROM node:22-alpine AS build
WORKDIR /app

RUN apk add --no-cache git && corepack enable

COPY package.json yarn.lock .yarnrc.yml ./
COPY .yarn .yarn
RUN yarn install --immutable

COPY . .
RUN yarn build

FROM caddy:2-alpine
COPY Caddyfile /etc/caddy/Caddyfile
COPY --from=build /app/.vitepress/dist /srv

EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -qO- http://127.0.0.1:8080/health || exit 1
