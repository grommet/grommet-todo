// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.

import React from 'react';

import App from 'grommet/components/App';
import Footer from 'grommet/components/Footer';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';

import TodoAppDashboard from './components/TodoAppDashboard';

const TodoApp = () => {
  return (
    <App centered={false}>
      <Header direction="row" justify="between"
        large={true} pad={{horizontal: 'medium'}}>
        <Title>Todo App</Title>
      </Header>
      <TodoAppDashboard />
      <Footer primary={true} appCentered={true} direction="column"
        align="center" pad="small" colorIndex="grey-1">
        <p>
          Build your ideas
          with <a href="http://grommet.io" target="_blank">Grommet</a>!
        </p>
      </Footer>
    </App>
  );
};

export default TodoApp;
module.exports = TodoApp;
