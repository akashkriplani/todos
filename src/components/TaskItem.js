import React, { Component } from 'react';

export default class TaskItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: this.props.taskItem.task,
      isEditing: false
    };
  }

  setIsEditing(isEditing) {
    this.setState({ isEditing });
  }

  deleteTaskItem = () => this.props.deleteTaskItem(this.props.id);

  handleChange = (event) => this.setState({ task: event.target.value });

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.editTaskItem(this.props.id, this.state.task);
    this.setIsEditing(false);
  };

  render() {
    return (
      <tr>
        {this.state.isEditing ? (
          <>
            <td>
              <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.task} onChange={this.handleChange} autoFocus />
              </form>
            </td>
            <td>
              <button type="submit" onClick={this.handleSubmit}>
                Save
              </button>
              <button type="button" onClick={() => this.setIsEditing(false)}>
                Back
              </button>
            </td>
          </>
        ) : (
          <>
            <td>{this.props.taskItem.task}</td>
            <td>
              <button onClick={() => this.setIsEditing(true)}>Edit</button>
              <button onClick={() => this.deleteTaskItem()}>Delete</button>
            </td>
          </>
        )}
      </tr>
    );
  }
}
