import React, { Component } from "react";

class myApp extends Component {
  constructor(props) {
    super(props);
    this.state = { unreadMassage: ["hey nai", "hey javaF"] };
  }
  render() {

    return (
      <div>
        {this.state.unreadMassage.length > 0 ? (
          <h1>have unread {this.state.unreadMassage.length} massage</h1>
        ) : (
          <h1>dont have </h1>
        )}
      </div>
    );
  }
}

export default myApp;
