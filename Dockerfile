# Usa una imagen ligera de Node.js
FROM node:18-alpine

# Crea el directorio de trabajo
WORKDIR /app

# Copia los archivos de dependencias
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia todos los archivos del proyecto al contenedor
COPY . .

# Compila los estilos de Tailwind CSS
RUN npm run build:css

# Expone el puerto donde correrá la app
EXPOSE 8080

# Comando para iniciar el servidor
CMD ["npm", "start"]
