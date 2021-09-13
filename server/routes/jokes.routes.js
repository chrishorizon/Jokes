const jokesController = require("../controllers/jokes.controller");

module.exports = app => {
    app.get("/api/jokes/", jokesController.findAll);
    app.get("/api/jokes/:id", jokesController.findOne);
    app.post("/api/jokes/new", jokesController.createNewJoke);
    app.put("/api/jokes/update/:id", jokesController.updateExistingJoke);
    app.delete("/api/jokes/delete/:id", jokesController.deleteAnExistingJoke);
}