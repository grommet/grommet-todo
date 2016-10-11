// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.

import React from 'react';

import Anchor from 'grommet/components/Anchor';
import App from 'grommet/components/App';
import Box from 'grommet/components/Box';
import Footer from 'grommet/components/Footer';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';

import TodoAppDashboard from './components/TodoAppDashboard';

const TodoApp = () => {
  return (
    <App centered={false}>
      <Box full={true}>
        <Header direction="row" justify="between" pad={{horizontal: 'medium'}}>
          <Title>Todo App</Title>
        </Header>
        <TodoAppDashboard />
        <Footer primary={true} appCentered={true} direction="column"
          align="center" pad="small" colorIndex="grey-1">
          <p>
            Build your ideas
            with <Anchor href="http://grommet.io" target="_blank">
              Grommet
            </Anchor>!
          </p>
        </Footer>
      </Box>
    </App>
  );
};

export default TodoApp;
module.exports = TodoApp;
