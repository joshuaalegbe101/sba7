const mongoose = require("mongoose");

const showSchema = new mongoose.Schema({
    title: { type: String, required: true },
    episodes: {
        runtime: { type: Number, required: true }
    },
    seasons: { type: Number, required: true }

});

const Show = mongoose.model("Show", showSchema)
module.exports = Show;