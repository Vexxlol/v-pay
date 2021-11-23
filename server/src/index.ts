const express = require('express');
const chalk = require('chalk');
const emoji = require('node-emoji')


import login from './routes/api/login';
import pay from './routes/api/pay';
const app: any = express();

let port: number = 5000;

app.use('/api/v1/login', login);
app.use('/api/v1/pay', pay)

app.get('/', async (req: any, res: any) => {
    res.send({data: `Welcome, to Earth! ${emoji.get('alien')}${emoji.get('raised_hands')}`});
})

app.listen(port, () => console.log('🚀 Server started on '  + chalk.green('http://localhost:' + port) + '!'))