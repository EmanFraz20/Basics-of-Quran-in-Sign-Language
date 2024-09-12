import {Router} from "express";
import * as questioncontroller from '../controllers/question.controller.js';

const router=Router();

router.route('/questions')
.get(questioncontroller.getQuestions)
.post(questioncontroller.insertQuestions)
.delete(questioncontroller.dropQuestions)

router.route('/result')
.get(questioncontroller.getResult)
.post(questioncontroller.storeResult)
.delete(questioncontroller.dropResult)

export default router; 