import dotenv from "dotenv";
dotenv.config();

import express from "express";
import { connectDB } from "./database/db.js";
import { bookRouter } from "./routes/bookRoutes.js";

connectDB();

const app = express();
const port = 3000;

app.use(express.json());
app.use("/api/books", bookRouter);

app.listen(port, () => {
  console.log("ассан шүү", port);
});
