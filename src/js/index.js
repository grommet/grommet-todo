// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.
require('../scss/index.scss');

var React = require('react');
var ReactDOM = require('react-dom');
var TodoApp = require('./TodoApp');

var element = document.getElementById('content');
ReactDOM.render(React.createElement(TodoApp), element);

document.body.classList.remove('loading');
