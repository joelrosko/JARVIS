const sqlite3 = require('sqlite3');
const { v4: uuidv4 } = require('uuid');
const generateHash = require('../service/generateHash.service');

const addUser = async (userName, email, password) => {
    return new Promise((resolve, reject) => {
        const db = new sqlite3.Database('./../db/jarvis.db');
        db.get('SELECT * FROM users WHERE name = ? LIMIT 1', [userName], async (err, row) => {
            if (err) reject({message: 'Lost connection to database, please try again'});

            if (row) {
                reject({error: 'User already exists'});
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

module.exports = { addUser };