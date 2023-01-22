import React, { Component } from 'react';
import TaskItem from './TaskItem';

export default class TaskList extends Component {
  renderTaskItems = () =>
    this.props.tasks.map((task, index) => (
      <TaskItem
        key={index}
        id={index}
        taskItem={task}
        deleteTaskItem={this.props.deleteTask}
        editTaskItem={this.props.editTask}
      />
    ));
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{this.renderTaskItems()}</tbody>
      </table>
    );
  }
}
