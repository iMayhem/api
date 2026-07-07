FROM node:22-alpine
WORKDIR /app

RUN apk add --no-cache git

COPY package.json package-lock.json ./
RUN npm install --omit=dev

COPY . ./

EXPOSE 3001
ENV PORT=3001
CMD ["node", "server/server.js"]
