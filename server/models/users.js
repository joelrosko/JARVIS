const sqlite3 = require('sqlite3');
const { v4: uuidv4 } = require('uuid');
const generateHash = require('../service/generateHash.service');

const addUser = async (userName, email, password) => {
    return new Promise((resolve, reject) => {
        const db = new sqlite3.Database('./../db/jarvis.db');
        db.get('SELECT * FROM users WHERE name = ? LIMIT 1', [userName], async (err, row) => {
            if (err) reject('Lost connection to database, please try again');

            if (row) {
                reject('User already exists');
            } else {
                const userID = uuidv4();
                try {
                    const hash = await generateHash(password);
                    const fields = [userID, userName, email, hash];
                    const sql = 'INSERT INTO users VALUES(?, ?, ?, ?)';
        
                    db.run(sql, fields, (err) => {
                        if (err) reject('User not saved to database');
    
                        resolve('User created and saved');
                    });
                }
                catch (err) {
                    reject(err);
                }
            }
        });
    });
}

const resetUserPassword = async (userName) => {
    return new Promise((resolve, reject) => {
        const db = new sqlite3.Database('./../db/jarvis.db');
        db.get('SELECT * FROM users WHERE name = ? LIMIT 1', [userName], async (err, row) => {
            if (err) reject('Lost connection to database, please try again');

            if (!row) {
                reject('User does not exists');
            } else {
                const newPassword = Math.random().toString(36).slice(-8);
                try {
                    const hash = await generateHash(newPassword);
                    db.run('UPDATE users SET psw = ? WHERE name = ?', [hash, userName], (err) => {
                        if (err) reject('Password not updated in database');
    
                        resolve({
                            password: newPassword,
                            message: 'Password updated'
                        });
                    });
                }
                catch (err) {
                    reject(err);
                }
                
            }
        });
    });
}

module.exports = { addUser, resetUserPassword };