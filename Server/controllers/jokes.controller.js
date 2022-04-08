const res = require("express/lib/response");
const Joke = require("../models/jokes.models");

const getALLJokes = (req, res) => {
  Joke.find()
    .then(allJokes => res.json(allJokes))
    .catch((err) => console.log(err));
};

const getJokeById = (req, res) => {
  const { params } = req;
  Joke.findOne({ _id: params._id})
    .then(joke => res.json(joke))
    .catch(err => console.log(err))
};

const createNewJoke = (res, req) => {
  const { body } = req;
  Joke.create(body)
    .then((newJoke) => res.json(newJoke))
    .catch(err => console.log(err));
};

const updateJoke = (res, req) => {
  Joke.findOneAndUpdate({_id: req.params._id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((updateJoke) => res.json(updateJoke))
    .catch(err => console.log(err));
};


const deleteJoke = (res, req) => {
  Joke.deleteOne({_id: req.params._id })
    .then((result) => res.json(result))
    .catch((err) => console.log(err));
};

module.exports = {
  getALLJokes,
  getJokeById,
  createNewJoke,
  updateJoke,
  deleteJoke,
};