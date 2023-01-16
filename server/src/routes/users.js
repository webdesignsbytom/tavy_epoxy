const express = require('express')

const router = express.Router();
const {
    getAllUsers,
    registerNewUser
} = require('../controllers/users')

router.get('/', getAllUsers)
router.post('/register', registerNewUser)

module.exports = router