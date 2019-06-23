import React from "react";

const ToDo = props => {
  return (
    <div className="todo-items">
      <input
        type="checkbox"
        checked={props.datas.completed}
        onChange={() => props.handleChange(props.datas.id)}
      />
      <p>{props.datas.text}</p>
    </div>
  );
};
export default ToDo;
