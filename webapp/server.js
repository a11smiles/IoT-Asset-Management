// community libs
var express = require('express'),
    morgan = require('morgan'),
    path = require('path');

// custom libs
var config = require('./config.js');

// instantiate server
var app = express();

// configure public assets folder
app.use(express.static(__dirname + '/public'));

// turn on logging
app.use(morgan('dev'));

// route for index.html
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/app/views/index.html'));
});

// start server
app.listen(config.port);