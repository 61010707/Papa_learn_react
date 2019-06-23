import React, { Component } from "react";
import Conditional from "./conditional";
class MyApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }

  componentDidMount() {
    setTimeout(() => {
      console.log("componet did mount ");
      this.setState({
        isLoading: false
      });
    }, 1500);
  }
  
  render() {
    console.log(this.state.isLoading);
    return (
      <div>
        Code goes here = {this.state.isLoading ? "true" : "false"}
        <Conditional isLoading={this.state.isLoading} />
      </div>
    );
  }
}

export default MyApp;
