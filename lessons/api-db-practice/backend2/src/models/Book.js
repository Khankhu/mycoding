import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    publishedAt: { type: Number, required: true },
    author: { type: String, required: true },
    description: { type: String },
    genre: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

export const Book = mongoose.model("Book", bookSchema);
