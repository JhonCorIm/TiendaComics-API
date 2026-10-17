import "dotenv/config";
import mongoose from "mongoose";
import { readFile } from "node:fs/promises";
import { conectarDB } from "./config/db.js";
import Autor from "./models/Autor.js";
import Comic from "./models/Comic.js";

async function cargarDatos() {
  try {
    await conectarDB();

    const autores = JSON.parse(
      await readFile("./data/autores.json", "utf8")
    );

    const comics = JSON.parse(
      await readFile("./data/comics.json", "utf8")
    );

    console.log("Cargando autores...");
    await Autor.insertMany(autores);

    console.log("Cargando cómics...");
    await Comic.insertMany(comics);

    console.log("Datos cargados correctamente");
  } catch (error) {
    console.error("Error al cargar datos:", error.message);
  } finally {
    await mongoose.disconnect();
  }
}

cargarDatos();
