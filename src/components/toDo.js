import React from "react";

const ToDo = props => (
  <div className="todo-items">
    <input type="checkbox" checked={props.data.completed}/>
    <p>{props.data.text}</p>
  </div>
);
export default ToDo;
