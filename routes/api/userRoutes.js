const router = require('express').Router();
const getUsers = require('../../controllers/userController');
const { User } = require('../../models');

router.get('/', async (req, res) => {
    try{
        const userTestData = await User.findAll()
        res.status(200).json(userTestData)
    } catch (err) {
        res.status(500).json(`THIS IS WRONG`)
    }
});

module.exports = router;