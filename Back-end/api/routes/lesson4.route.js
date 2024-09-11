import express from "express";
import { getLesson4 } from "../controllers/lesson4.controller.js";

const router = express.Router();

router.get("/lesson4", getLesson4);

export default router;