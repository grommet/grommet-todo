// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.

import React, { Component } from 'react';

import Button from 'grommet/components/Button';
import Header from 'grommet/components/Header';
import Meter from 'grommet/components/Meter';
import Section from 'grommet/components/Section';
import Table from 'grommet/components/Table';
import Tile from 'grommet/components/Tile';
import Tiles from 'grommet/components/Tiles';

import Status from 'grommet/components/icons/Status';
import CloseIcon from 'grommet/components/icons/base/Close';

import TodoAddTaskForm from './TodoAddTaskForm';

function getLabel(label, value, colorIndex) {
  return { label, value, colorIndex };
}

export default class TodoAppDashboard extends Component {

  constructor () {
    super();

    this._onRequestForAdd = this._onRequestForAdd.bind(this);
    this._onRequestForAddClose = this._onRequestForAddClose.bind(this);
    this._onRequestForDelete = this._onRequestForDelete.bind(this);
    this._onAddTask = this._onAddTask.bind(this);

    this.state = {
      tasks: [],
      addTask: false
    };
  }

  _onRequestForAdd () {
    this.setState({addTask: true});
  }

  _onRequestForAddClose () {
    this.setState({addTask: false});
  }

  _onRequestForDelete (index) {
    let tasks = this.state.tasks;
    tasks.splice(index, 1);
    this.setState({tasks: tasks});
  }

  _onAddTask (task) {
    let tasks = this.state.tasks;
    tasks.push(task);
    this.setState({tasks: tasks, addTask: false});
  }

  render () {

    let tasksMap = {
      error: 0,
      ok: 0,
      warning: 0
    };

    let tasks = this.state.tasks.map(function(task, index) {

      tasksMap[task.status] += 1;

      return (
        <tr id={index} key={"task_" + index}>
          <td width="10%"><Status value={task.status} small={true} /></td>
          <td>{task.item}</td>
          <td width="10%">
            <Button type="icon"
              onClick={this._onRequestForDelete.bind(this, index)}>
              <CloseIcon a11yTitleId={'delete-icon-' + index}
                a11yTitle={"Delete " + task.item + " task"} />
            </Button>
          </td>
        </tr>
      );
    }, this);

    let addTask = null;
    if (this.state.addTask) {
      addTask = (
        <TodoAddTaskForm onClose={this._onRequestForAddClose}
          onSubmit={this._onAddTask} />
      );
    }

    return (
      <Section primary={true}>
        <Tiles fill={true} flush={false}>
          <Tile align="center">
            <Meter series={[
              getLabel('Past Due', tasksMap.error, 'error'),
              getLabel('Due Soon', tasksMap.warning, 'warning'),
              getLabel('Done', tasksMap.ok, 'ok')
            ]} type="circle" units="Tasks" />
          </Tile>
          <Tile align="start">
            <Header><h3>My Tasks:</h3></Header>
            <Table>
              <tbody>
                {tasks}
              </tbody>
            </Table>
            <Button label="Add Task" primary={true} strong={true}
              onClick={this._onRequestForAdd} />
          </Tile>
        </Tiles>
        {addTask}
      </Section>
    );
  }
}
