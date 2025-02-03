require("dotenv").config();
const mongoose = require("mongoose");
const Show = require("./models/shows.js");
const Movie = require("./models/movies.js");
const Reviews = require("./models/reviews.js");

mongoose.connect(process.env.MONGODB_URI, {
});

const sampleMovies = [
    { title: "Inception", runtime: 148, genres: ["Sci-Fi", "Thriller"] },
    { title: "Interstellar", runtime: 169, genres: ["Sci-Fi", "Drama"] },
    { title: "The Dark Knight", runtime: 152, genres: ["Action", "Crime"] },
    { title: "Fight Club", runtime: 139, genres: ["Drama", "Thriller"] },
    { title: "Forrest Gump", runtime: 142, genres: ["Drama", "Romance"] },
    { title: "The Matrix", runtime: 136, genres: ["Sci-Fi", "Action"] },
    { title: "The Godfather", runtime: 175, genres: ["Crime", "Drama"] },
    { title: "Pulp Fiction", runtime: 154, genres: ["Crime", "Drama"] },
    { title: "Avatar", runtime: 162, genres: ["Sci-Fi", "Adventure"] },
    { title: "Gladiator", runtime: 155, genres: ["Action", "Drama"] }
];

const sampleShows = [
    { title: "Breaking Bad", episodes: { runtime: 47 }, seasons: 5 },
    { title: "Game of Thrones", episodes: { runtime: 57 }, seasons: 8 },
    { title: "Stranger Things", episodes: { runtime: 51 }, seasons: 4 },
    { title: "The Office", episodes: { runtime: 22 }, seasons: 9 },
    { title: "Sherlock", episodes: { runtime: 88 }, seasons: 4 },
    { title: "Friends", episodes: { runtime: 22 }, seasons: 10 },
    { title: "Westworld", episodes: { runtime: 60 }, seasons: 4 },
    { title: "The Mandalorian", episodes: { runtime: 38 }, seasons: 3 },
    { title: "The Witcher", episodes: { runtime: 59 }, seasons: 3 },
    { title: "Better Call Saul", episodes: { runtime: 47 }, seasons: 6 }
];

const sampleReviews = [
    { title: "Amazing movie!", duration: 120, mediaID: 1, rating: 9, comment: "Loved every second!" },
    { title: "Disappointing finale", duration: 110, mediaID: 2, rating: 5, comment: "Great start, bad ending." },
    { title: "Bingeworthy show", duration: 45, mediaID: 3, rating: 8, comment: "Hooked from episode 1!" },
    { title: "Masterpiece", duration: 60, mediaID: 4, rating: 10, comment: "A must-watch for everyone." },
    { title: "Overhyped", duration: 50, mediaID: 5, rating: 6, comment: "Good but not great." },
    { title: "Movie A", duration: 120, mediaID: 1, rating: 8, comment: "Great movie!" },
    { title: "Movie B", duration: 100, mediaID: 2, rating: 7, comment: "Good, but slow pacing." },
    { title: "Show X", duration: 45, mediaID: 3, rating: 9, comment: "Amazing story!" },
    { title: "Show Y", duration: 60, mediaID: 4, rating: 6, comment: "Decent but predictable." },
    { title: "Podcast Z", duration: 30, mediaID: 5, rating: 10, comment: "Best podcast ever!" }
];

async function seedDatabase() {
    try {
        await Movie.deleteMany();
        await Show.deleteMany(); 
        await Reviews.deleteMany(); 

        await Movie.insertMany(sampleMovies);
        console.log("Sample movies added!");

        await Show.insertMany(sampleShows);
        console.log("Sample shows added!");

        await Reviews.insertMany(sampleReviews);
        console.log("Sample reviews added!");

    } catch (err) {
        console.error("Error seeding database:", err);
    } finally {
        mongoose.connection.close();
    }
}

seedDatabase();
