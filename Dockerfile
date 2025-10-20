# Etapa 1: construir CSS con Tailwind
FROM node:18-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build:css

# Etapa 2: ejecutar la app
FROM node:18-alpine
WORKDIR /app

COPY --from=builder /app /app
EXPOSE 8080
CMD ["npm", "start"]
