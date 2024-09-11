import Lesson from "../models/lesson.model.js";

export const getLesson = async(req,res) => {
    try {
        const lesson = await Lesson.find({}).sort({id: 1});
        res.status(200).json(lesson)
    } catch (error) {
        console.log("Error: ",error)
        res.status(500).json(error)
    }
}