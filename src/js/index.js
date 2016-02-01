// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.
import '../scss/index.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './TodoApp';

var element = document.getElementById('content');
ReactDOM.render(React.createElement(TodoApp), element);

document.body.classList.remove('loading');
