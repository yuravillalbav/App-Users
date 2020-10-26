const express = require('express');
const router = express.Router();

const {getUsers, postUser, gettUser, patchUser, deleteUser} = require('../controllers/users.controller');

router.route('/')
    .get(getUsers)
    .post(postUser);

router.route('/:id')
    .get(gettUser)
    .patch(patchUser)
    .delete(deleteUser);

module.exports = router;