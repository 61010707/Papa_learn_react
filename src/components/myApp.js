import React, { Component } from "react";
import Header from "./header";
import MemeGenerator from "./memeGenerator";
class myApp extends Component {
  state = {};
  render() {
    return (
      <div>
        <Header />
        <MemeGenerator />
      </div>
    );
  }
}

export default myApp;
