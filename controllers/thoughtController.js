const { User, Thought } = require("../models");
const reactionSchema = require("../models/Reaction");
const mongoose = require("mongoose");
const { findById, findOneAndUpdate } = require("../models/User");

const thoughtController = {
  getThoughts(req, res) {
    Thought.find()
      .then((thoughts) => {
        res.status(200).json(thoughts);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },
  getThoughtById(req, res) {
    Thought.findById({ _id: req.params.thoughtId })
      .then((thoughts) => {
        res.status(200).json(thoughts);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },
  createNewThought(req, res) {
    Thought.create(req.body)
      .then((thoughts) => {
        // findOneAndUpdate(thoughts)
        console.log(thoughts)
        return User.findOneAndUpdate({username: thoughts.username}, {$push: {thoughts: thoughts._id}}, {new: true})
      })
      .then((user) => {
        console.log(user)
        res.status(200).json(user);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },
  updateThought(req, res) {
    Thought.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((thoughts) => {
        res.status(200).json(thoughts);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },
  deleteThought(req, res) {
    Thought.deleteOne({ _id: req.params.id })
      .then((thoughts) => {
        res.status(200).json(thoughts);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },
  createReaction(req, res) {
    Thought.findByIdAndUpdate(
      { _id: req.params.thoughtId },
      { $addToSet: { reactions: req.body } },
      { runValidators: true, new: true }
    )
      .then((thought) => {
        res.status(200).json(thought);
      })
      .catch((err) => {
        res.status(500).json(err);
        console.log("Create Reaction Error!");
      });
  },
  deleteReaction(req, res) {
    Thought.findByIdAndDelete(
      { _id: req.params.thoughtId },
      { $pull: { reactions: { reactionId: req.params.reactionId } } },
      { runValidators: true, new: true }
    )
      .then((thought) => {
        res.status(200).json(thought);
      })
      .catch((err) => {
        res.status(500).json(err);
        console.log("Create Reaction Error!");
      });
  },
};

module.exports = thoughtController;
