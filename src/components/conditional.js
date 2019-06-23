import React from "react";

function Conditional(props) {
  return <h1>{props.isLoading ? "loading..... ": "Loading complete"}</h1>;
}

export default Conditional;
