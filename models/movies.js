const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    title: { type: String, required: true },
    runtime: { type: Number, required: true },
    genres: { type: [String], required: true }
});

const Movie = mongoose.model("Movie", movieSchema);
module.exports = Movie;