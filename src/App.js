import React, { Component } from "react";

const style = {
  container: {
    width: 500,
    marginLeft: "auto",
    marginRight: "auto"
  },
  Label: {
    margin: 10
  },
  Textfield: {
    margin: 10,
    padding: 10
  }
};
class App extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      task: "",
      tasks: []
    };
  }
  handlChange = e => {
    this.setState({ task: e.target.value });
  };

  handleSubmit(e) {
    e.preventDefault();
    const newTask = {
      task: this.state.task,
      id: Date.now()
    };
    this.setState({
      tasks: [newTask, ...this.state.tasks]
    });
  }

  render() {
    console.log(this.state.task);
    return (
      <div style={style.container}>
        <h1>Todo Application</h1>
        <form onSubmit={this.handleSubmit}>
          <label style={style.Label}>Add your task here</label>
          <br />
          <input
            style={style.Textfield}
            type="text"
            value={this.state.task}
            onChange={this.handlChange}
          />
          <br />
          <button style={style.Button}> Add Task </button>
        </form>
        <hr />
        <ul>
          {this.state.tasks.map(el => {
            return <li key={el.id}>{el.task}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default App;
