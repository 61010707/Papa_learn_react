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
      randomTmg: "http://i.imgflip.com/1bij.jpg",
      allMemeImgs: []
    };
  }
  /**
   * We'll be using an API that provides a bunch of meme images.
   *
   * Your task:
   * make an API call to "https://api.imgflip.com/get_memes" and save the
   * data that comes back (`response.data.memes`) to a new state property
   * called `allMemeImgs`. (The data that comes back is an array)
   */
  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())

      .then(response => {
        const { memes } = response.data;
        console.log(memes[0]);
        this.setState({ allMemeImg: memes });
      });
    this.handleChange = this.handleChange.bind(this);
  }

  /**
   * Create the onChagne handler method
   * It should update the corresponding state on every change of the input box
   */
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }
  render() {
    return (
      <div>
        <form className="meme-form">
          {/** * Create 2 input fields, one for the topText and one for the
          bottomText * Remember that these will be "controlled forms", so make
          sure to add * all the attributes you'll need for that to work */}
          <input
            type="text"
            name="topText"
            placeholder="Top Text"
            value={this.state.topText}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="bottomText"
            placeholder="Bottm Text"
            value={this.state.bottomText}
            onChange={this.handleChange}
          />
        </form>
        <hr />
        <h2>
          {this.state.topText} {this.state.bottomText}
        </h2>
      </div>
    );
  }
}

export default MemeGenerator;
