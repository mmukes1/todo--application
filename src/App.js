import React, { Component } from "react";
import TodoList from "./components/Todo/TodoList";
import Todo from "./components/Todo/Todo";
import TodoTitle from "./components.Todo/TodoTitle";

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
      tasks: [newTask, ...this.state.tasks],
      task: ""
    });
  }

  render() {
    const { task, tasks } = this.state;
    return (
      <div style={style.container}>
        <TodoTitle title={"Todo Application"} />
        <Todo handleSubmit={this.handleSubmit} styles={style} />
        <hr />
        <TodoList task={this.state.tasks} />
      </div>
    );
  }
}
export default App;
