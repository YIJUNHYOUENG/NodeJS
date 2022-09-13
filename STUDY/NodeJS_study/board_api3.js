const morgan = require('morgan');
const url = require('url');
const uuidAPIkey = require('uuid-apikey');
const cors = require('cors');

const express = require('express');
const app = express();

app.set('port', process.env.PORT || 8080);

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

const key = { 
    apiKey: '722K2GX-JYP4YXQ-HQPC8H9-KHED8AR',
    uuid: '38853143-97ac-4f76-8dec-c4459c5cd42b'
};

let boardList = [];
let numOfBoard = 0;

app.get('/', (req, res) => {
    res.send('This is api.js');
});

app.get('/board', (req, res) => {
    res.send(boardList);
});

app.post('/board', (req, res) => {
    const board = {
        "id": ++numOfBoard,
        "user_id": req.body.user_id,
        "date": new Date(),
        "title": req.body.title,
        "content": req.body.content
    };
    boardList.push(board);
    

    res.redirect('/board');
});

app.put('/board:id', (req, res) => {
    const findItem = boardList.find((item) => {
        return item.id == +req.params.id;
    });

    const idx = boardList.indexOf(findItem);
    boardList.splice(idx, 1);

    const board = {
        "id": +req.params.id,
        "user_id": req.params.user_id,
        "date": new Date(),
        "title": req.body.title,
        "content": req.body.content
    };
    boardList.push(board);

    res.redirect('/board');
});

app.delete('/board/:id', (req, res) => {
    const findItem = boardList.find((item) => {
        return item.id == +req.params.id;
    });
    const idx = boardList.indexOf(findItem);
    boardList.splice(idx, 1);

    res.redirect('/board');
});

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 서버 실행 중...');
});