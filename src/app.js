import express from "express";
import dotenv from "dotenv";
import conectarDB from "./config/db.js";

// Importar rutas
import autoresRoutes from "./routes/autores.routes.js";
import comicsRoutes from "./routes/comics.routes.js";

// Configurar variables de entorno
dotenv.config();

const app = express();

// Permitir recibir datos JSON
app.use(express.json());

// Ruta principal
app.get("/", (req, res) => {
  res.json({
    mensaje: "API TiendaComics funcionando"
  });
});

// Rutas de autores y cómics
app.use("/api/autores", autoresRoutes);
app.use("/api/comics", comicsRoutes);

// Puerto del servidor
const PORT = process.env.PORT || 3000;

// Conectar a MongoDB e iniciar servidor
async function iniciarServidor() {
  try {
    await conectarDB();

    app.listen(PORT, "0.0.0.0", () => {
      console.log(
        `Servidor funcionando en puerto ${PORT}`
      );
    });

  } catch (error) {
    console.error(
      "Error al iniciar servidor:",
      error.message
    );
    process.exit(1);
  }
}

iniciarServidor();
