const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('../db/jarvis.db', (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Connected to the user database.');
});

db.run('CREATE TABLE users(userId text NOT NULL PRIMARY KEY, name text NOT NULL, email text NOT NULL, psw text NOT NULL)');

db.close();