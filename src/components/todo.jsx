import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


class Todo extends Component {
    
    state = 
    {
      tasks: [],
      newTask: '',
    };

  handleInputChange = (event) => 
  {
    this.setState({ newTask: event.target.value });
  };

  handleAddTask = () => 
  {
    const { newTask, tasks } = this.state;
    if (newTask.trim() !== '') {
      this.setState({tasks: [...tasks, { id: Date.now(), text: newTask, completed: false }], newTask: '',});
    }
  };

  handleToggleComplete = (taskId) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task),
    }));
  };

  handleDeleteTask = (taskId) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter((task) => task.id !== taskId),
    }));
  };

  render() {
    const { tasks, newTask } = this.state;

    return (
      <div>
        <center>
          <h1>Todo App</h1>
          <div>
          <br/>
            <input type="text" value={newTask} onChange={this.handleInputChange} placeholder="Enter the task to be done    " />
            <br/><br/><button className="btn btn-secondary btn-sm" onClick={this.handleAddTask}>Add</button>
          </div>
          <ul>
            {tasks.map((task) => (
              <h3 key={task.id}>
                <input type="checkbox" checked={task.completed} onChange={() => this.handleToggleComplete(task.id)} />
                <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                  {task.text}
                </span>
                <button className="btn btn-primary btn-sm" onClick={() => this.handleDeleteTask(task.id)}>Delete</button>
              </h3>
            ))}
          </ul>
        </center>
      </div>
    );
  }
}

export default Todo;
