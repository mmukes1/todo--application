import React from "react";
const TodoList = props => {
  return (
    <ul>
      {tasks.map(task => {
        return <li key={task.id}>{task.task}</li>;
      })}
    </ul>
  );
};
export default TodoList;
