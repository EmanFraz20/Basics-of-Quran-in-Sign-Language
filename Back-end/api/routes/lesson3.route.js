import express from "express";
import { getLesson3 } from "../controllers/lesson3.controller.js";

const router = express.Router();

router.get("/lesson3", getLesson3);

export default router;