import mongoose from "mongoose";

const lessonSchema = mongoose.Schema({
    name: String,
    image: String
})

const Lesson3 = mongoose.model("Lesson3", lessonSchema);

export default Lesson3;