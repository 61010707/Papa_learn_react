import React from "react";
import ToDo from "./toDo";
import ToDoData from "./todoData";

class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: ToDoData
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState(prevState => {
      const updateTodo = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return {
        todos: updateTodo
      };
    });
  }
  render() {
    const ToDoComponents = this.state.todos.map(data => (
      <ToDo key={data.id} datas={data} handleChange={this.handleChange} />
    ));
    return <div className="todo-lists">{ToDoComponents}</div>;
  }
}
export default MyApp;
