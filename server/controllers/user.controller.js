const { addUser, resetUserPassword, loginUser } = require('../models/users');
const { resetPasswordMail } = require('../service/sendEmail.service');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config()

// @desc    Register new user
// @route   POST /api/users/register
// @access  Public
const registerUser = async (req, res) => {
    const { userName, email, password } = req.body;

    if (!userName || !email || !password) {
        return res.status(400).send({error: 'Please enter all fileds'});
    }

    try {
        const resDB = await addUser(userName, email, password)
        return res.status(201).send({message: resDB});
    }
    catch (err) {
        return res.status(500).send({error: err});
    }
}

// @desc    Request new password
// @route   POST /api/users/resetpassword
// @access  Public
const resetPassword = async (req, res) => {
    const { userName } = req.body;

    if (!userName) {
        return res.status(400).send({error: 'Please enter username'});
    }

    try {
        const resDB = await resetUserPassword(userName);
        const resEmail = await resetPasswordMail(resDB.password, userName);

        if (resEmail.hasOwnProperty('accepted')) {
            return res.status(200).send({message: 'Password updated, new password is sent to your email'});
        } else {
            return res.status(503).send({error: 'Password updated but Email was not sent'});
        }
    }
    catch (err) {
        return res.status(500).send({error: err});
    }
}

// @desc    Request new password
// @route   POST /api/users/resetpassword
// @access  Public
const logIn = async (req, res) => {
    const { userName, password } = req.body;

    if (!userName || !password) {
        return res.status(400).send({error: 'Please enter all fileds'});
    }

    try {
        const resDB = await loginUser(userName);

        const isMatch = await bcrypt.compare(password, resDB.psw);
        if (!isMatch) return res.status(401).send({error: 'Invalid credentials'});

        return res.status(200).send({message: 'Successful sign in', token: generateToken(resDB.userId)});
    }
    catch (err) {
        return res.status(500).send({error: err});
    }
}

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
      expiresIn: '30d',
    })
}

module.exports = { registerUser, resetPassword, logIn };