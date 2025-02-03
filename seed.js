require("dotenv").config();
const mongoose = require("mongoose");
const Reviews = require("./models/reviews.js");

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const sampleReviews = [
    { title: "Movie A", duration: 120, mediaID: 1, rating: 8, comment: "Great movie!" },
    { title: "Movie B", duration: 100, mediaID: 2, rating: 7, comment: "Good, but slow pacing." },
    { title: "Show X", duration: 45, mediaID: 3, rating: 9, comment: "Amazing story!" },
    { title: "Show Y", duration: 60, mediaID: 4, rating: 6, comment: "Decent but predictable." },
    { title: "Podcast Z", duration: 30, mediaID: 5, rating: 10, comment: "Best podcast ever!" }
];

const sampleMovies = []

async function seedDatabase() {
    try {
        await Reviews.deleteMany(); // Clear existing data
        await Reviews.insertMany(sampleReviews);
        console.log("Sample reviews added");
    } catch (err) {
        console.error("Error seeding database:", err);
    } finally {
        mongoose.connection.close(); // Close DB connection after seeding
    }
}

seedDatabase();
