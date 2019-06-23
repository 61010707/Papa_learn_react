import React, { Component } from "react";
class myApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogging: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(prevState => {
      return { isLogging: !prevState.isLogging };
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          {this.state.isLogging ? "log out " : "log in"}
        </button>
      </div>
    );
  }
}

export default myApp;
