import { Book } from "./models/Book.js";
import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { connectDB } from "./database/db.js";
connectDB();

const testCreateBook = async () => {
  try {
    const newBook = await Book.create({
      title: "1984",
      author: "George Orwell",
      publishedAt: 1929,
      price: 35000,
      description: "Дэлхийн алдарт зөгнөлт роман",
      genre: "Зөгнөлт",
    });

    console.log("Амжилттай нэмлээ", newBook);
  } catch (error) {
    console.error("Failed", error);
  }
};
testCreateBook();

const app = express();
const port = 3000;

app.use(express.json());

app.listen(port, () => {
  console.log("Энэ сервер асвал унтрахгүй ! Намайг яах гэж асаасан юм", port);
});
