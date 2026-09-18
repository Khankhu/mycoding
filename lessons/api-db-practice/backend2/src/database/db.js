import mongoose from "mongoose";
export const connectDB = async () => {
  const connectionString = process.env.MONGODB_URI;
  try {
    await mongoose.connect(connectionString);
    console.log("Database connected succecfully");
  } catch (error) {
    console.error("Database connection errror", error);
  }
};
