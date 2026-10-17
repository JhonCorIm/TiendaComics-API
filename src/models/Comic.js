import mongoose from "mongoose";

const comicSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true
  },
  anioPublicacion: {
    type: Number
  },
  editorial: {
    type: String
  },
  sinopsis: {
    type: String
  },
  generos: [{
    type: String
  }],
  autorId: {
    type: mongoose.Schema.Types.Mixed
  }
});

const Comic = mongoose.model(
  "Comic",
  comicSchema,
  "Comics"
);

export default Comic;
