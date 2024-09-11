import mongoose from "mongoose";

const lessonSchema = mongoose.Schema({
    name: String,
    image: String
})

const Lesson4 = mongoose.model("Lesson4", lessonSchema);

export default Lesson4;