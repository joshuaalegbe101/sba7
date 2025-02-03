const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
    title: String,
    duration: Number,
    mediaID: Number,
    rating: Number,
    comment: String
})

const Review = mongoose.model("Podcast", reviewSchema)
module.exports = Review;