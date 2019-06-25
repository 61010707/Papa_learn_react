import React, { Component } from "react";
/**
 * Initialize state to save the following data:
 *      top text
 *      bottom text
 *      random image (intialize with "http://i.imgflip.com/1bij.jpg")
 */

class MemeGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topText: "",
      bottomText: "",
      randomTmg: "http://i.imgflip.com/1bij.jpg"
    };
  }
  render() {
    return <h1>Meme Generrator</h1>;
  }
}

export default MemeGenerator;
