const { User, Thought } = require('../models');
const reactionSchema = require('../models/Reaction');

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
        Thought.findById({ _id: req.params.thoughtId})
        .then((thoughts) => {
            res.status(200).json(thoughts);
        })
        .catch((err) => {
            res.status(500).json(err);
        })
    },
    createNewThought(req, res) {
        Thought.create(req.body)
        .then((thoughts) => {
            res.status(200).json(thoughts);
        })
        .catch((err) => {
            res.status(500).json(err);
        })
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
        Thought.create
    },
    deleteReaction(req, res) {
        reaction
    }
};

module.exports = thoughtController;