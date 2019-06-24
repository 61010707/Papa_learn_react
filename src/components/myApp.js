import React, { Component } from "react";

class myApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    console.log(this.state.firstName);
  }
  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            name="firstName"
            placeholder="First name "
            onChange={this.handleChange}
          />
          <br />
          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            onChange={this.handleChange}
          />
          <h2>
            {this.state.firstName} {this.state.lastName}
          </h2>
        </form>
      </div>
    );
  }
}

export default myApp;
