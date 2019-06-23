import React from "react";

class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: props.datas.completed,
      text: props.datas.text
    };
  }

  render() {
    return (
      <div className="todo-items">
        <input type="checkbox" checked={this.state.completed} />
        <p>{this.state.text}</p>
      </div>
    );
  }
}
export default ToDo;
