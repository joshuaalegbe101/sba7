const mongoose = require("mongoose");

const podcastSchema = new mongoose.Schema({
    title: String,
    speaker: [String],
    duration: Number
})

const Podcast = mongoose.model("Podcast", podcastSchema)
module.exports = Podcast;