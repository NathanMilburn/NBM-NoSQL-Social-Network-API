const { User, Thought } = require("../models");
const mongoose = require('mongoose');

const userController = {
  getUsers(req, res) {
    User.find()
      .then((userData) => {
        res.status(200).json(userData);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },
  getUserById(req, res) {
    User.findById({ _id: req.params.id })
      .select("-__v")
      .populate("thoughts")
      .then((userData) => {
        res.status(200).json(userData);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },
  createUser(req, res) {
    console.log(req.body)
    User.create(req.body)
      .then((userData) => {
        res.status(200).json(userData);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },
  deleteUser(req, res) {
    User.deleteOne({ _id: req.params.id })
      .then((userData) => {
        res.status(200).json(userData);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },
  updateUser(req, res) {
    User.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((userData) => {
        res.status(200).json(userData);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },
  addFriend(req, res) {
    User.findByIdAndUpdate(
      { _id: req.params.userId },
      { $push: req.params.friendId },
      { runValidators: true, new: true }
    )
      .then((userData) => {
        res.status(200).json(userData);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },
  removeFriend(req, res) {
    User.findByIdAndUpdate(
      { _id: req.params.userId },
      { $pull: req.params.friendId },
      { runValidators: true, new: true }
    )
      .then((userData) => {
        res.status(200).json(userData);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },
};

module.exports = userController;
