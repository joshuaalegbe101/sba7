const mongoose = require("mongoose");

const moviesSchema = new mongoose.Schema({
    title: String,
    runtime: Number,
    genres: [String]
});

const Movie = mongoose.model("Movie", moviesSchema);
module.exports(Movie);