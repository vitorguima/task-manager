const express = require('express');

const register = require('./routes/users/register');

const app = express();

app.use(express.json());

app.use(register);

app.listen(3000);
