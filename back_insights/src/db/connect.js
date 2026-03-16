import mongoose from "mongoose";

const DB_NAME = process.env.DB_NAME;
const MONGO_URL = process.env.MONGO_URL;

export async function connectdb() {
  if (!MONGO_URL || !DB_NAME) {
    throw new Error("Missing MONGO_URL env var");
  }

  await mongoose.connect(MONGO_URL, { dbName: DB_NAME });
    console.log('Connection établie avec succès');
}

export async function disconnectdb() {
  await mongoose.disconnect();
  console.log('Mongoose déconnecter');
}
