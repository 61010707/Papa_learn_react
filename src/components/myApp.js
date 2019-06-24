import React, { Component } from "react";

class myApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      isFriendly: false,
      gender: "",
      favLang: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
    console.log(checked);
  }
  handleSubmit() {}
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
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
          <br />
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={this.state.gender === "male"}
              onChange={this.handleChange}
            />{" "}
            Male
            <br />
            <input
              type="radio"
              name="gender"
              value="female"
              checked={this.state.gender === "female"}
              onChange={this.handleChange}
            />
            Female
          </label>
          <br />
          <label>favorite hello lang : </label>
          <select
            name="favLang"
            value={this.state.favLang}
            onChange={this.handleChange}
          >
            <option value="" />
            <option value="hello ce">hello ce </option>
            <option value="hello go">hello go</option>
            <option value="hello c">hello c</option>
            <option value="hello java">hello java </option>
          </select>
          <hr />
          <h1>
            My name is : {this.state.firstName} {this.state.lastName}
          </h1>
          <h2>He is : {this.state.isFriendly ? " friendly" : "so so"}</h2>
          <h2> gender is {this.state.gender}</h2>
          <h2>favorite hello lang is {this.state.favLang}</h2>
          <button >submit !!!</button>
        </form>
      </div>
    );
  }
}

export default myApp;
