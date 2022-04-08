const JokeController = require("../controllers/jokes.controller");

module.exports = (app) => {
  app.get("/api/jokes", JokeController.getALLJokes);
  app.post("/api/joke", JokeController.createNewJoke);
  app.get("/api/jokes/:_id", JokeController.getJokeById);
};