import mongoose from "mongoose";

const mongoUri = process.env.MONGO_URL;

export const dbConnection = async () => {
  try {
    await mongoose.connect(mongoUri);
    console.log("Database is UP");
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // process 1 code means failure and 0 means success
  }
};
