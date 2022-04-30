const router = require('express').Router();
const { User } = require('../../models');
const {getUsers, getUserById, createUser, deleteUser, updateUser, addFriend, removeFriend} = require('../../controllers/userController')


router.route('/').get(getUsers).post(createUser);
router.route('/:id').get(getUserById).delete(deleteUser).put(updateUser);
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend)
module.exports = router;