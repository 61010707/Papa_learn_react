import React, { Component } from "react";

class MyApp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  
  componentDidMount() {
    //Get the data I need to correctly display
  }

  componentWillReceiveProps(nextProps) {
    // receive props from parent
    if (nextProps.whateever !== this.props.whateever) {
      // do some thing
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    // return true if want it to update
    // return false if not
  }

  componentWillUnmount() {
    //unmount from screen 
    // remove or clenup your code your components 
    //(E.g remove events )
  }
  getSnapshotBeforeUpdate()
  {
    //create a backup of current way 
  }
  render() {
    return <div>Code goes here</div>;
  }
}

export default MyApp;
