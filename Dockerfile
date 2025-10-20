# Usa una imagen ligera de Node.js
FROM node:18-alpine

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos de configuración primero (para aprovechar la cache)
COPY package*.json ./

# Instala dependencias de producción y desarrollo (Tailwind incluido)
RUN npm install

# Copia todo el proyecto
COPY . .

# Compila Tailwind CSS antes de iniciar el servidor
RUN npx tailwindcss -i ./input.css -o ./public/styles.css

# Expone el puerto 8080 para Zeabur
EXPOSE 8080

# Comando para ejecutar el servidor
CMD ["npm", "start"]
