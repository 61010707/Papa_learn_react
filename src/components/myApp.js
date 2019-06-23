import React from "react";

class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIN: false
    };
  }

  render() {
    return (
      <div>
        <h1>your are current logged {this.state.isLoggedIN ? "in" : "out"}</h1>
      </div>
    );
  }
}
export default MyApp;
