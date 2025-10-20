# Imagen base
FROM node:18-alpine

# Directorio de trabajo
WORKDIR /app

# Copiar archivos del proyecto
COPY . .

# Instalar dependencias
RUN npm install

# Construir CSS con Tailwind
RUN npm run build

# Exponer el puerto
EXPOSE 3000

# Comando por defecto
CMD ["npm", "start"]
