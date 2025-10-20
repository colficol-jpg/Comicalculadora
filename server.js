import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Servir carpeta pública
app.use(express.static(path.join(__dirname, "public")));

// Servir index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () =>
  console.log(`🚀 Servidor corriendo correctamente en puerto ${PORT}`)
);
