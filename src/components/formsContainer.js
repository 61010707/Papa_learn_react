import React, { Component } from "react";
import FormsComponent from "./formsComponent";
class FormsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      age: 0,
      gender: "",
      destination: "",
      dietaryRestrictions: {
        isVegen: false,
        isKosher: false,
        isLactose: false
      }
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    const { name, value, type, checked } = event.target;

    type === "checkbox"
      ? this.setState(prevState => {
          return {
            dietaryRestrictions: {
              ...prevState.dietaryRestrictions,
              [name]: checked
            }
          };
        })
      : this.setState({
          [name]: value
        });
  }
  render() {
    return (
      <FormsComponent handleChange={this.handleChange} data={this.state} />
    );
  }
}

export default FormsContainer;
