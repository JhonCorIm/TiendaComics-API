import mongoose from "mongoose";

const autorSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  apellido: {
    type: String,
    required: true
  },
  nombreArtistico: {
    type: String
  },
  nacionalidad: {
    type: String
  },
  fechaNacimiento: {
    type: Date
  },
  fechaFallecimiento: {
    type: Date
  },
  biografia: {
    type: String
  }
});

const Autor = mongoose.model(
  "Autor",
  autorSchema,
  "Autores"
);

export default Autor;