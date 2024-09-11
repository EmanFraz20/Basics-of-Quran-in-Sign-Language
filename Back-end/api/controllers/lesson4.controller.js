import Lesson4 from "../models/lesson4.model.js"

export const getLesson4 = async(req,res) => {
    try {
        const lesson4 = await Lesson4.find({}).sort({id: 1});
        res.status(200).json(lesson4)
    } catch (error) {
        console.log("Error: ",error)
        res.status(500).json(error)
    }
}