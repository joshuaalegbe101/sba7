const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const app = express();
require("dotenv").config();
const Movies = require("./models/movies.js");
const Shows = require("./models/shows.js");
const Reviews = require("./models/reviews.js");


mongoose.connect(process.env.MONGODB_URI)
mongoose.connection.on("connected", () => {
    console.log(`Connected to MongoDB ${mongoose.connection.name}!`)
});

app.use(express.urlencoded({ extended: false}));
app.use(morgan("dev"));

//ROUTES

//Homepage
app.get("/", aysnc(req, res) => {
    res.
});

//Index Movies Route
app.get("/movies", async (req, res) => {
    const allMovies = await Movies.find();
    console.log(allMovies);
});

//Index Shows Route
app.get("/shows", async (req, res) => {
    const allShows = await Shows.find();
    console.log(allShows);
});

app.get("/reviews", async (req, res) => {
    const allReviews = await Reviews.find();
    console.log(allReviews);
})








//PORT STUFF
const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log("Server Listening On Port: ", PORT)
});