import express from "express";
import Comic from "../models/Comic.js";

const router = express.Router();

// GET - Consultar todos los comics
router.get("/", async (req, res) => {
  try {
    const comics = await Comic.find();
    res.json(comics);
  } catch (error) {
    res.status(500).json({
      mensaje: "Error al consultar comics",
      error: error.message
    });
  }
});

// GET - Consultar un comic por ID
router.get("/:id", async (req, res) => {
  try {
    const comic = await Comic.findById(req.params.id);

    if (!comic) {
      return res.status(404).json({
        mensaje: "Comic no encontrado"
      });
    }

    res.json(comic);
  } catch (error) {
    res.status(400).json({
      mensaje: "ID inválido o consulta incorrecta",
      error: error.message
    });
  }
});

// POST - Crear un nuevo comic
router.post("/", async (req, res) => {
  try {
    const nuevoComic = new Comic(req.body);
    const comicGuardado = await nuevoComic.save();

    res.status(201).json({
      mensaje: "Comic creado correctamente",
      comic: comicGuardado
    });
  } catch (error) {
    res.status(400).json({
      mensaje: "Error al crear comic",
      error: error.message
    });
  }
});

export default router;
