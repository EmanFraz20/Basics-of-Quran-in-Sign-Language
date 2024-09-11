import express from "express";
import { getLesson2 } from "../controllers/lesson2.controller.js";

const router = express.Router();

router.get("/lesson2", getLesson2);

export default router;