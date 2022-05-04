import express from "express";
import multer from "multer";
import {
  createProduct,
  getProducts,
  getProduct,
  deleteProduct,
} from "../controllers/productsController.js";
import morgan from "morgan";
import { hasTokenExpired } from "../middlewares/authMiddlewares.js";

import upload from "../config/multerConfig.js";

const router = express.Router();

router.post("/", upload.array("images"), createProduct);
router.get("/", getProducts);
router.get("/:id", getProduct);
router.delete("/:id", deleteProduct);

export default router;
