const express = require("require");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();

app.use(express.json());

mongoose.connect(process.env.ATLAS_URI)
mongoose.connection.on("connection", () => {
    console.log(`Connected to MongoDB ${mongoose.connection.name}!`)
});

app.use(express.urlencoded({ extended: false}));

//ROUTES








//PORT STUFF
const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log("Server Listening On Port: ", PORT)
});