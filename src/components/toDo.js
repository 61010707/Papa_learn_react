import React from "react";

const ToDo = props => (
  <div className="todo-items">
    <input type="checkbox" checked={props.datas.completed}/>
    <p>{props.datas.text}</p>
  </div>
);

export default ToDo;
