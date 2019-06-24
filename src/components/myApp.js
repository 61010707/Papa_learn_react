import React, { Component } from "react";

class myApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      isFriendly: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;
    this.setState({
      [name]: value
    });
    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
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
          <br />
          <textarea name="text" value={"some value"} />
          <br />
          <br />
          <label>
            <input
              type="checkbox"
              name="isFriendly"
              checked={this.state.isFriendly}
              onChange={this.handleChange}
            />{" "}
            isFriendly ??
          </label>

          <h2>
            {this.state.firstName} {this.state.lastName}{" "}
            {this.state.isFriendly ? "isFriendly" : null}
            {}
          </h2>
        </form>
      </div>
    );
  }
}

export default myApp;
