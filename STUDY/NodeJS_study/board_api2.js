const morgan = require('morgan');
const url = require('url');
const uuidAPIkey = require('uuid-apikey');

const express = require('express');
const app = express();

app.set('port', process.env.PORT || 8080);

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const key = {  
    apiKey: '722K2GX-JYP4YXQ-HQPC8H9-KHED8AR',
    uuid: '38853143-97ac-4f76-8dec-c4459c5cd42b'
};

let boardList = [];
let numOfBoard = 0;
  
app.get('/board/:apikey/:type', (req, res) => {
  let { type, apikey } = req.params;
  const queryData = url.parse(req.url, true).query;

  if(uuidAPIkey.isAPIKey(apikey) && uuidAPIkey.check(apikey, key.uuid)) {
    if (type === 'search') {
        const keyword = queryData.keyword;
        const result = boardList.filter((e) => {
            return e.title.includes(keyword);
        });
        res.send(result);
    } else if(type === 'user') {
        const user_id = queryData.user_id;
        const result = boardList.filter((e) => {
            return e.user_id === user_id;
        });
        res.send(result);
    } else {
        res.send("Wrong URL");
    }
  } else {
    res.send('Wrong API Key');
  }
});

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 서버 실행 중...');
});