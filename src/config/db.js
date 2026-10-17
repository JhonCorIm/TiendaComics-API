import mongoose from "mongoose";

export default async function conectarDB() {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log("Conectado a MongoDB Atlas");
}
