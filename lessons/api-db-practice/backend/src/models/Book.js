import mongoose from "mongoose";
const bookSchema = new mongoose.Schema(
  {
    title: { type: "String", required: true },
    author: { type: "String", required: true },
    publishedAt: { type: "Number", required: true },
    description: { type: "String", required: false },
    genre: { type: "String", required: true },
    price: { type: "Number", required: true },
  },
  {
    timestamps: true,
  },
);

export const Book = mongoose.model("Book", bookSchema);
