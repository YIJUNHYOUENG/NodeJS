const express = require('express');
const app = express();

let num = 1;

app.get('/', function (req, res, next) {
    res.send('Hello World!');
    next();
    num++;
});

const myLogger = function (req, res,next) {
    console.log(num);
    next();
};

app.use(myLogger);

app.listen(8080);