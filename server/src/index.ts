const express = require('express');
const chalk = require('chalk');
const emoji = require('node-emoji');
const cookieParser = require("cookie-parser");
const session = require('express-session');


import login from './routes/api/login';
import transactions from './routes/api/transactions';
import index from './routes/views/index';
import users from './routes/api/users'

const app: any = express();
let port: number = 5000;

app.use(session({
    secret: "this",
    saveUninitialized:true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 },
    resave: false
}))

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use(cookieParser())


app.use('/api/v1/login', login);
app.use('/api/v1/trans', transactions);
app.use('/api/v1/users', users)
app.use('/', index);


app.listen(port, () => console.log('🚀 Server started on '  + chalk.green('http://localhost:' + port) + '!'))

// https://discord.com/api/oauth2/authorize?client_id=912962370966544384&redirect_uri=localhost%3A5000%2Fapi%2Fv1%2Flogin%2Fdiscord&response_type=code&scope=identify%20email