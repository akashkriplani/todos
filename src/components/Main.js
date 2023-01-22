import React, { Component } from 'react';
import CreateTask from './CreateTask';
import TaskList from './TaskList';

const tasks = [];

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { tasks: [] };
  }

  createTask = (task) => {
    if (task.trim() === '') {
      alert('Task cannot be empty');
      return;
    }

    tasks.push({ task, isCompleted: false });
    this.setState({ tasks });
  };

  deleteTask = (taskId) => {
    tasks.splice(taskId, 1);
    this.setState({ tasks });
  };

  render() {
    return (
      <div>
        <h1>Todos</h1>
        <div>
          <CreateTask createTask={this.createTask} />
          <br />
          <TaskList tasks={this.state.tasks} deleteTask={this.deleteTask} />
        </div>
      </div>
    );
  }
}
