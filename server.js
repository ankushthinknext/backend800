import express from "express";
import dotenv from "dotenv";
import cors from "cors";
//Routes Imports
import productsRoutes from "./routes/productsRoutes.js";
import usersRoutes from "./routes/usersRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import categoriesRoutes from "./routes/categoriesRoutes.js";

import connectDB from "./dbconn.js";
import createFakeProducts from "./seeders/productsSeeder.js";
import morgan from "morgan";
//seeders import

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));
app.use(express.static("uploads"));

// app.use(morgan("tiny"));

dotenv.config();
connectDB();

app.use("/products", productsRoutes);
app.use("/users", usersRoutes);
app.use("/categories", categoriesRoutes);

app.use("/auth", authRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
