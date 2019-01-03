import React from "react";

class Todo extends Component{
  state ={
    task =""
  };
  render(){
    return(
      <form onSubmit={this.props.handleSubmit}>
          <label style={this.props.styles.Label}>Add your task here</label>
          <br />
          <input
            style={props.styles.Textfield}
            type="text"
            value={this.state.task}
            onChange={this.handlChange}
          />
          <br />
          <button style={props.styles.Button}> Add Task </button>
        </form>
    );
  }
}
export default Todo;
