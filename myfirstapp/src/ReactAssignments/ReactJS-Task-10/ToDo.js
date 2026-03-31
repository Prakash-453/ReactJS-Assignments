import React, { Component } from "react";
import "./ToDo.css"; // Importing the CSS file

class ToDo extends Component {
  constructor() {
    super();
    this.state = { todo: "", list: [] };
  }

  handleChange = (event) => {
    this.setState({ todo: event.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.todo.trim() !== "") {
      this.setState((a) => ({
        list: [...a.list, a.todo],
        todo: "",
      }));
    }
  };

  handleEdit = (b) => {
    const task = this.state.list[b];
    this.setState({ todo: task });
    this.handleDelete(b);
  };

  handleDelete = (b) => {
    this.setState((prevState) => ({
      list: prevState.list.filter((_, i) => i !== b),
    }));
  };

  render() {
    return (
      <div className="todo-container">
        <h1 className="todo-title">To-Do List</h1>
        <form onSubmit={this.handleSubmit} className="todo-form">
          <input
            type="text"
            name="ToDo"
            value={this.state.todo}
            onChange={this.handleChange}
            placeholder="Enter a task"
            className="todo-input"
          />
          <button type="submit" className="todo-submit">
            Add Task
          </button>
        </form>
        <ul className="todo-list">
          {this.state.list.map((a, b) => (
            <li key={b} className="todo-item">{a}
              <div className="todo-actions">
                <button onClick={() => this.handleEdit(b)} className="todo-edit">Edit</button>
                <button onClick={() => this.handleDelete(b)} className="todo-delete">Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ToDo;
