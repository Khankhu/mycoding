import express from "express";
import {
  createBook,
  deleteBook,
  getBookByID,
  getBooks,
  updateBook,
} from "../controllers/bookControllers.js";

export const bookRouter = express.Router();

bookRouter
  .post("/", createBook)
  .get("/", getBooks)
  .get("/:id", getBookByID)
  .delete("/:id", deleteBook)
  .put("/:id", updateBook);
