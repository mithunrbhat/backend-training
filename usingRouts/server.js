var express = require('express');
var path = require('path');

var app = express();

app.use('/static', express.static(path.resolve(__dirname, 'public', 'static')));

app.get('/index.html*', function(req, res) {
    res.sendFile(path.resolve('public', 'index.html'));
});

app.listen(process.env.PORT || 5060, () => 
    console.log('server running'));