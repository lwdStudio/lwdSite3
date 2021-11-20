FROM node:14-bullseye AS builder

# Build Gatsby Applpication
WORKDIR /app
# Install Dependencies
COPY ./package*.json .

RUN yarn

# Copy application sources
COPY . .

RUN yarn build

FROM nginx:latest

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=builder /app/public .

ENTRYPOINT [ "nginx", "-g", "daemon off;" ]
