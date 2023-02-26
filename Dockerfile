FROM node:19-alpine as base

WORKDIR /app
COPY package.json package-lock.json /app/
RUN npm install --omit=dev

FROM base as builder
ENV NEXT_BUILD_TIME=true
RUN npm install --prefer-offline
COPY . /app
RUN npm run build

FROM base
WORKDIR /app
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js ./next.config.js

EXPOSE 3000
CMD ["npm", "run", "start"]
