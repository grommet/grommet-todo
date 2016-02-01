// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.

import React, { Component } from 'react';

import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import Form from 'grommet/components/Form';
import FormField from 'grommet/components/FormField';
import FormFields from 'grommet/components/FormFields';
import Footer from 'grommet/components/Footer';
import Layer from 'grommet/components/Layer';
import Menu from 'grommet/components/Menu';

export default class TodoAddTaskForm extends Component {
  constructor () {
    super();

    this._onSubmit = this._onSubmit.bind(this);
    this._onItemChange = this._onItemChange.bind(this);
    this._onStatusChange = this._onStatusChange.bind(this);

    this.state = {
      item: undefined,
      status: undefined
    };
  }

  _onSubmit (event) {
    event.preventDefault();
    if (this.state.item) {
      this.props.onSubmit({
        item: this.state.item,
        status: this.state.status || 'ok'
      });
    }
  }

  _onItemChange (event) {
    this.setState({item: event.target.value});
  }

  _onStatusChange (event) {
    this.setState({status: event.target.value});
  }

  render () {
    return (
      <Layer onClose={this.props.onClose} closer={true} align="right"
        a11yCloserTitle={'Close the Add Task Form'}>
        <Form onSubmit={this._onSubmit}>
          <header><h1>Add Task</h1></header>
          <FormFields>
            <fieldset>
              <FormField label="Task" htmlFor="taskInput"
                help="what's to be done?">
                <input id="taskInput" name="task" type="text"
                  ref="taskInput" onChange={this._onItemChange} />
              </FormField>
              <FormField label="Status" htmlFor="statusInput">
                <select id="statusInput" name="status"
                  onChange={this._onStatusChange}>
                  <option value="ok">Done</option>
                  <option value="warning">Due Soon</option>
                  <option value="error">Past Due</option>
                </select>
              </FormField>
            </fieldset>
          </FormFields>
          <Footer pad={{vertical: 'medium'}}>
            <Menu direction="row" responsive={false}>
              <Box>
                <Button label="OK" primary={true}
                  onClick={this._onSubmit} type="submit"/>
              </Box>
              <Box>
                <Button label="Cancel" onClick={this.props.onClose} />
              </Box>
            </Menu>
          </Footer>
        </Form>
      </Layer>
    );
  }
}
