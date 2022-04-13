const express = require('express');
const router = express.Router();
const { registerUser, resetPassword, logIn } = require('../controllers/user.controller');

router.post('/register', registerUser);
router.post('/resetpassword', resetPassword);
router.post('/login', logIn);

module.exports = router;