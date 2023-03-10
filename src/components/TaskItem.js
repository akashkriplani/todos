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

  toggleTaskItem = () => this.props.toggleTaskItem(this.props.id);

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
              <button className="save" type="submit" onClick={this.handleSubmit}>
                Save
              </button>
              <button className="back" type="button" onClick={() => this.setIsEditing(false)}>
                Back
              </button>
            </td>
          </>
        ) : (
          <>
            <td className="task" onClick={this.toggleTaskItem}>
              <input type="checkbox" readOnly checked={this.props.taskItem.isCompleted} />
              <span className={this.props.taskItem.isCompleted ? 'completed' : 'in-progress'}>
                {this.props.taskItem.task}
              </span>
            </td>
            <td>
              <button className="edit" onClick={() => this.setIsEditing(true)}>
                Edit
              </button>
              <button className="delete" onClick={() => this.deleteTaskItem()}>
                Delete
              </button>
            </td>
          </>
        )}
      </tr>
    );
  }
}
