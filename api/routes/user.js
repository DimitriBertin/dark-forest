const express = require('express')
const userController = require('./../controllers/users')
const router = express.Router()

// Get list of users
router.get('/login', userController.login)
router.get('/register', userController.register)
router.get('/reset-password', userController.resetPassword)

router.get('/users', userController.findAll)
router.get('/users/:id', userController.findOne)
router.post('/users/:id', userController.updateUser)
router.delete('/users/:id', userController.deleteUser)

module.exports = router
