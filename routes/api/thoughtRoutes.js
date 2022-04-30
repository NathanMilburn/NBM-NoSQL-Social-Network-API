const router = require('express').Router();
const { Thought } = require('../../models');
const {getThoughts, getThoughtById, createNewThought, updateThought, deleteThought, createReaction, deleteReaction} = require('../../controllers/thoughtController')

// router.get('/', async (req, res) => {
//     res.status(200).json(`Howdy! this is my api/thoughts route`)
// });

router.route('/').get(getThoughts).post(createNewThought);
router.route('/:id').get(getThoughtById).delete(deleteThought).put(updateThought);
router.route('/:thoughtId/reactions').post(createReaction).delete(deleteReaction)

module.exports = router;