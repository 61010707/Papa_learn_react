import React from "react";
class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: "yes"
    };
  }

  render() {
    return (
      <div>
        <h1>Is state import to known? {this.state.answer}</h1>
      </div>
    );
  }
}
export default MyApp;
