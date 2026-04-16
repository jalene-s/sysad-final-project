# ─────────────────────────────────────────────
# Dockerfile: Multi-stage build (React → nginx)
# Stage 1: Build React app
# Stage 2: Serve with nginx
# ─────────────────────────────────────────────

FROM node:18-alpine AS builder

WORKDIR /app

COPY frontend/package.json frontend/package-lock.json ./
RUN npm ci --silent

COPY frontend/ .
RUN npm run build

FROM nginx:alpine

LABEL maintainer="Team 4"
LABEL description="CPE HOA Portfolio - Jalene, Ruel, Jayvee"
LABEL version="1.0"

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]