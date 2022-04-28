const router = require('express').Router();

router.get('/', async (req, res) => {
    res.status(200).json(`Howdy! this is my api/thoughts route`)
});

module.exports = router;