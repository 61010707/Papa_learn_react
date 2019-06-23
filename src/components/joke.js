import React from "react";

const Joke = props => (
  <div className="joke-items">
    <span style={{ display: !props.question && "none" }}>
      Question : {props.question}{" "}
    </span>
    <span style={{ color: !props.question && "#888888" }}>
      punch line :{props.answer}
    </span>
    <hr />
  </div>
);

export default Joke;
