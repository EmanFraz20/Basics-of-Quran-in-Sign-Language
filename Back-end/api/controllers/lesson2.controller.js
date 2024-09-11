import Lesson2 from "../models/lesson2.model.js"

export const getLesson2 = async(req,res) => {
    try {
        const lesson2 = await Lesson2.find({}).sort({id: 1});
        res.status(200).json(lesson2)
    } catch (error) {
        console.log("Error: ",error)
        res.status(500).json(error)
    }
}