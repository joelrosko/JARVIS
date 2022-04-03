const bcrypt = require('bcryptjs');
require('dotenv').config();

const hashPassword = async (password) => {
    return new Promise((resolve, reject) => {
        bcrypt.genSalt(parseInt(process.env.N_SALT), (err, salt) => {
            if (err) reject('Salt not created, please try again');
    
            bcrypt.hash(password, salt, (err, hash) => {
                if (err) reject('Password not hashed, please try again');
    
                resolve(hash);
            });
        });
    });
}

module.exports = hashPassword;