import express from "express";
import { getLesson } from "../controllers/lesson.controller.js";

const router = express.Router();

router.get("/lesson1", getLesson);

export default router;