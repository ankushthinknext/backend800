import express from "express";
const router = express.Router();
import { getDashboardData } from "../controllers/dashboardControllers.js";

router.get("/", getDashboardData);

export default router;
