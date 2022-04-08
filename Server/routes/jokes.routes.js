const JokeController = require("../controllers/jokes.controller");

module.exports = (app) => {
  app.get("/api/jokes", JokeController.getALLJokes);
  app.post("/api/joke", JokeController.createNewJoke);
  app.get("/api/jokes/:_id", JokeController.getJokeById);
  app.put("api/joke/:_id", JokeController.updateJoke);
  app.delete("api/joke/:_id", JokeController.deleteJoke);
};