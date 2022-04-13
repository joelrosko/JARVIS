const express = require('express');
const router = express.Router();
const { registerUser, resetPassword } = require('../controllers/user.controller');

router.post('/register', registerUser);
router.post('/resetpassword', resetPassword);

module.exports = router;