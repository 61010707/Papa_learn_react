import React from "react";
import ToDo from "./toDo";
import ToDoData from "./todoData";

class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: ToDoData
    };
  }

  render() {
    const ToDoComponents = this.state.todos.map(data => (
      <ToDo key={data.id} datas={data} />
    ));
    return <div>{ToDoComponents}</div>;
  }
}
export default MyApp;
