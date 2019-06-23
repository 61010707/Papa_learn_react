import React from "react";
import ToDo from "./toDo";
import ToDoData from "./todoData";
function MyApp() {
  const ToDoComponents = ToDoData.map(data => (
    <ToDo key={data.id} data={data} />
  ));
  return <div className="todo-lists">{ToDoComponents}</div>;
}

export default MyApp;
