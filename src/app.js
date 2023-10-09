const express = require('express');
const dotenv = require('dotenv').config();
const app = express();

app.use('/api', router);

app.set('port', process.env.PORT || 3333);

module.exports = app;

const app = require('./app');
const port = app.get('port');

app.listen(port, () => {
    console.log(`Running on port ${ port }!`);
});
