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
app.get("/", async (req, res) => {
    console.log("Home");
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

//Index Reviews Route
app.get("/reviews", async (req, res) => {
    const allReviews = await Reviews.find();
    console.log(allReviews);
})

//DELETE - Remove a review from the DB
app.delete("/reviews/:reviewId", async (req, res) => {
    await Reviews.findByIdAndDelete(req.params.reviewId)
    res.redirect("/reviews");
})

//UPDATE - Update a review in the DB
app.put("/reviews/:reviewId", async (req,res) => {
    await Reviews.findByIdAndUpdate(req.params.reviewId, req.body);
    res.send("Review updated successfully")
})

//CREATE - Create a review and insert in the DB
app.post("/reviews", async (req, res) => {
    try {
        const newReview = new Reviews(req.body);
        await newReview.save();
        res.status(201).json(newReview);
    } catch (error) {
        res.status(400);
    }
});



//PORT STUFF
const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log("Server Listening On Port: ", PORT)
});