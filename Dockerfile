FROM node:20-alpine as builder

WORKDIR /app
COPY package.json package-lock.json /app/
RUN npm install --omit=dev

ENV NEXT_BUILD_TIME=true
RUN npm install --prefer-offline
COPY . /app
RUN npm run build

FROM caddy:2.7-alpine

COPY Caddyfile /etc/caddy/Caddyfile
COPY --from=builder /app/out /app
