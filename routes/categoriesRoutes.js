import express from "express";

const router = express.Router();

import {
  createCategory,
  getCategories,
  getCategory,
} from "../controllers/categoriesController.js";

router.post("/", createCategory);
router.get("/", getCategories);
router.get("/:id", getCategory);

export default router;
