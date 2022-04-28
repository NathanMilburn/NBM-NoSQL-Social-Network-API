// TODO: Check this out later.
const { User, Thought } = require('../models');

const userController = {
    getUsers(req, res) {
        return res.status(200).json(`Howdy! this is my api/users route`)
    }
}

module.exports = userController;