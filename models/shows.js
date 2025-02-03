const mongoose = require("mongoose");

const showSchema = new mongoose.Schema({
    title: String,
    episodes: {
        runtime: Number
    },
    seasons: Number,

});

const Show = mongoose.model("Show, showSchema")
module.exports = Show;