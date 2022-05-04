import express from "express";
import dotenv from "dotenv";

//Routes Imports
import productsRoutes from "./routes/productsRoutes.js";
import usersRoutes from "./routes/usersRoutes.js";
import authRoutes from "./routes/authRoutes.js";

import connectDB from "./dbconn.js";
import createFakeProducts from "./seeders/productsSeeder.js";
import morgan from "morgan";
//seeders import

const app = express();
app.use(express.json());
app.use(morgan("tiny"));
app.use(express.static("uploads"));

// app.use(morgan("tiny"));

dotenv.config();
connectDB();

app.use("/products", productsRoutes);
app.use("/users", usersRoutes);

app.use("/auth", authRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
