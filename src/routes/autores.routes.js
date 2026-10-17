import express from "express";
import Autor from "../models/Autor.js";

const router = express.Router();

// GET - Consultar todos los autores
router.get("/", async (req, res) => {
  try {
    const autores = await Autor.find();
    res.json(autores);
  } catch (error) {
    res.status(500).json({
      mensaje: "Error al consultar autores",
      error: error.message
    });
  }
});

// GET - Consultar un autor por ID
router.get("/:id", async (req, res) => {
  try {
    const autor = await Autor.findById(req.params.id);

    if (!autor) {
      return res.status(404).json({
        mensaje: "Autor no encontrado"
      });
    }

    res.json(autor);
  } catch (error) {
    res.status(400).json({
      mensaje: "ID inválido o consulta incorrecta",
      error: error.message
    });
  }
});

// POST - Crear un nuevo autor
router.post("/", async (req, res) => {
  try {
    const nuevoAutor = new Autor(req.body);
    const autorGuardado = await nuevoAutor.save();

    res.status(201).json({
      mensaje: "Autor creado correctamente",
      autor: autorGuardado
    });
  } catch (error) {
    res.status(400).json({
      mensaje: "Error al crear autor",
      error: error.message
    });
  }
});

export default router;