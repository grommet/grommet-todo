// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development Company, L.P.

var compression = require('compression');
var express = require('express');
var http = require("http");
var morgan = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');
var sass = require('node-sass');

var React = require('react');
var ReactDOMServer = require('react-dom/server');

var server = express();
var TodoApp = React.createFactory(require('../src/js/TodoApp'));

var theme = sass.renderSync({
  file: 'node_modules/grommet/scss/vanilla/index.scss',
  includePaths: [path.resolve(__dirname, '../node_modules')]
});

var PORT = process.env.PORT || 8050;

var app = express();

app.set('view engine', 'ejs');

app.use(compression());

app.use(morgan('tiny'));

app.use(bodyParser.json());

app.get('/', function (req, res) {

  // server side rendering with react + webpack
  var todoAppHtml = ReactDOMServer.renderToString(TodoApp({}));
  res.render('index.ejs', {appBody: todoAppHtml, styleContent: '<style>' + theme.css + '</style>'});

  //for single page app uncomment following line (remember to comment the 2 lines above)
  //res.sendFile(path.resolve(path.join(__dirname, '/../dist/index.html')));
});

app.use('/', express.static(path.join(__dirname, '/../dist')));

var server = http.createServer(app);
server.listen(PORT);

console.log('Server started, listening at: http://localhost:8050...');
