// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import {test} from 'tape';
import React from 'react';
import TestUtils from 'react-addons-test-utils';

import TodoAppDashboard from '../../src/js/components/TodoAppDashboard';

test('loads a basic dashboard', (t) => {

  t.plan(2);
  const shallowRenderer = TestUtils.createRenderer();
  shallowRenderer.render(React.createElement(TodoAppDashboard, { href: 'test' }));
  const todoAppDashboardElement = shallowRenderer.getRenderOutput();

  t.ok(todoAppDashboardElement.props.primary, 'Dashboard has primary section');

  t.equal(
    todoAppDashboardElement.props.children[0].props.children.length, 2,
    'Dashboard has two tiles'
  );
});
