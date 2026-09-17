import mongoose from "mongoose";
export const connectDB = async () => {
  const connectionString = process.env.MONGO_URI;
  try {
    await mongoose.connect(connectionString);
    console.log(
      "Дата баазтай хэзээ ч салахгүйгээр хэзээ ч унтрахгүй сервер амжилттай холбогдлоо !!!",
    );
  } catch (error) {
    ("Энэ error хэзээ ч ажиллахгүй", error);
  }
};
