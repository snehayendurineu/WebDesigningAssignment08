const userController = require('../controller/userController.js')
const express = require('express');
const router = express.Router();


router.post('/user/create', userController.addUser)
router.get('/user/getAll', userController.getUsers)
router.put('/user/edit', userController.updateUser)
router.delete('/user/delete', userController.deleteUser)
router.put('/user/uploadImage', userController.uploadImage)

module.exports = router;
