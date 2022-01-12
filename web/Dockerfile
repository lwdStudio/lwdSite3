FROM node:16-bullseye AS builder

# Build Gatsby Applpication
WORKDIR /app

# Copy application sources
COPY . .

RUN npm install

RUN npm run build

FROM nginx:latest

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=builder /app/public .

ENTRYPOINT [ "nginx", "-g", "daemon off;" ]
