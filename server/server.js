const express = require('express');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.use('/api/users', require('./routes/user.routes'))

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server running on port ${port}`));
