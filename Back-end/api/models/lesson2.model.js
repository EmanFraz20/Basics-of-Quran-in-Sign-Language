import mongoose from "mongoose";

const lessonSchema = mongoose.Schema({
    name: String,
    image: String
})

const Lesson2 = mongoose.model("Lesson2", lessonSchema);

export default Lesson2;