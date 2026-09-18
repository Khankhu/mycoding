import { Book } from "../models/Book.js";

export const createBook = async (req, res) => {
  try {
    const body = req.body;
    const newBook = {
      title: body.title,
      publishedAt: body.publishedAt,
      author: body.author,
      description: body.description,
      genre: body.genre,
    };
    await Book.create(newBook);
    res.status(201).json(newBook);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getBookByID = async (req, res) => {
  try {
    const id = req.params.id;
    const book = await Book.findById(id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteBook = async (req, res) => {
  try {
    const id = req.params.id;
    const book = await Book.findByIdAndDelete(id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateBook = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const book = await Book.findByIdAndUpdate(id, body, { new: true });
    if (!book) {
      return res.status(404).json({ message: error.message });
    }
    res.status(200).json({ message: "Book updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
