import mongoose from 'mongoose'

const postSchema = mongoose.Schema({
    name: String,
    date: String,
    hour: String,
    number: Number,
    text: String
});

export default mongoose.model('Post', postSchema);