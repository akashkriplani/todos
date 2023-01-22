import React, { Component } from 'react';

export default class TaskItem extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.taskItem.task}</td>
        <td>
          <button>Edit</button>
          <button onClick={() => this.props.deleteTaskItem(this.props.id)}>Delete</button>
        </td>
      </tr>
    );
  }
}
