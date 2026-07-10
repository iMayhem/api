FROM node:22-alpine
WORKDIR /app

# Install Chromium and its dependencies for Puppeteer
RUN apk add --no-cache \
    chromium \
    nss \
    freetype \
    harfbuzz \
    ca-certificates \
    font-noto \
    font-noto-cjk \
    ttf-freefont

COPY package.json package-lock.json ./
RUN npm install --omit=dev

COPY . ./

EXPOSE 3001
ENV PORT=3001
CMD ["node", "server/server.js"]
