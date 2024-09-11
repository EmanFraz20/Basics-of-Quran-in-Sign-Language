import Lesson3 from "../models/lesson3.model.js"

export const getLesson3 = async(req,res) => {
    try {
        const lesson3 = await Lesson3.find({}).sort({id: 1});
        res.status(200).json(lesson3)
    } catch (error) {
        console.log("Error: ",error)
        res.status(500).json(error)
    }
}