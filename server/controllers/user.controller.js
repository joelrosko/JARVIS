const { addUser } = require('../models/users');

// @desc    Register new user
// @route   POST /api/users
// @access  Public
const registerUser = async (req, res) => {
    const { userName, email, password } = req.body;

    if (!userName || !email || !password) {
        return res.status(400).send({message: 'Please enter all fileds'});
    }

    try {
        const resDB = await addUser(userName, email, password)
        return res.status(201).send({message: resDB});
    }
    catch (err) {
        return res.status(500).send({message: err});
    }
}

module.exports = { registerUser };