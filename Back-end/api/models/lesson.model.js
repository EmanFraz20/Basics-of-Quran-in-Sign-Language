import mongoose from "mongoose";

const lessonSchema = mongoose.Schema({
    name: String,
    image: String
})

const Lesson = mongoose.model("Lesson", lessonSchema);

export default Lesson;