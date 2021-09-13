const Joke = require("../models/jokes.model")

module.exports.findAll = (req, res) => {
    Joke.find()
        .then(allJokes => res.json({ jokes: allJokes}))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findOne = (req, res) => {
    Joke.findOne({ _id: req.params.id })
        .then(oneJoke => res.json({ joke: oneJoke}))
        .catch(err => res.json({ message: "Something went wrong", error: err}));
};

module.exports.createNewJoke = (req, res) => {
    Joke.create(req.body)
        .then(newlyJoke => res.json({ joke: newlyJoke }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.updateExistingJoke = (req, res) => {
    Joke.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(updatedJoke => res.json({ jokes: updatedJoke }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteAnExistingJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};