import React from "react";

const ToDo = props => {
  const completedStyle = {
    fontStyle: "italic",
    color: "#cdcdcd",
    textDecoration: "line-through"
  };
  return (
    <div className="todo-items">
      <input
        type="checkbox"
        checked={props.datas.completed}
        onChange={() => props.handleChange(props.datas.id)}
      />
      <p style={props.datas.completed ? completedStyle:null}>{props.datas.text}</p>
    </div>
  );
};

export default ToDo;
