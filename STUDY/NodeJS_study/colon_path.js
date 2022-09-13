const express = require('express');
const app = express();

app.get('/:type', (req, res) => {
    let { type } = req.params;
    res.send(type);
});z

app.listen(8080);