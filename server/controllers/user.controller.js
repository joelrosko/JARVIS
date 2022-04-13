const { addUser, resetUserPassword } = require('../models/users');
const { resetPasswordMail } = require('../service/sendEmail.service');

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

module.exports = { registerUser, resetPassword };