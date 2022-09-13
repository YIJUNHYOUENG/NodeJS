const http = require('http');

const session = {};
const sesskey = new Date();
session[sesskey] = {name: 'roadbook'};

http.createServer((req, res) => {
    res.writeHead(200, { 'Set-cookie': `session=${sesskey}`});
    res.end('Session-Cookie --> Header');
}).listen(8080, () => {
    console.log('8080포트에서 서버 연결 중...');
}); 