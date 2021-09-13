const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "Required"],
        minlength: [5, "Must be more than 5 characters long"]
    },
    punchline: {
        type: String,
        required: [true, "Punchline required"],
        minlength: [3, "Must be more than 3 characters long"]
    },
}, {timestamps: true});

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;