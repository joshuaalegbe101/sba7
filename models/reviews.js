const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
    title: { type: String, required: true },
    duration: { type: Number, min: 1 },
    mediaID: { type: Number, required: true },
    rating: { type: Number ,min: 0, max: 10, required: true },
    comment: { type: String, maxlength: 500 }
});

reviewSchema.index({ mediaID: 1});
reviewSchema.index({ rating: 1 });

const Review = mongoose.model("Review", reviewSchema)
module.exports = Review;