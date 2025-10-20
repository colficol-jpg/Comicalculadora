import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Servir los archivos estáticos de la carpeta "public"
app.use(express.static(path.join(__dirname, "public")));

// Servir el index.html directamente desde la raíz
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Fallback para rutas desconocidas
app.use((req, res) => {
  res.status(404).send("Página no encontrada");
});

app.listen(PORT, () => console.log(`✅ Servidor corriendo en puerto ${PORT}`));
