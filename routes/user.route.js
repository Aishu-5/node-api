const express = require('express');
const { getUsers, createUser, getUser, updatedUser, deleteUser } = require('../controllers/user.controllers');
const router = express.Router();

router.get('/',getUsers);
router.post('/',createUser);
router.get('/:id',getUser);
router.put('/:id',updatedUser);
router.delete('/:id',deleteUser);

module.exports = router;
